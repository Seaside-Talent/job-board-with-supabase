// For pages/api/onboarding.ts (Pages Router)
// Or app/api/onboarding/route.ts (App Router - ensure it's in a 'route.ts' file)

import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin"; // Your admin client setup

export async function POST(req: Request) {
  console.log("[Onboarding API] Received POST request");

  try {
    const body = await req.json();
    console.log("[Onboarding API] Request body:", body);

    const { fullName, email, password, companyName, companyIndustry, companySize, contactTitle } = body;

    // Validate incoming data (optional but recommended)
    if (!fullName || !email || !password || !companyName || !companyIndustry || !companySize) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const supabase = createAdminClient();

    // 1. Create user in Supabase Auth
    // Set email_confirm: true to allow immediate sign-in.
    console.log("[Onboarding API] Creating user in Supabase Auth...");
    const { data: signUpData, error: signUpError } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: fullName },
      email_confirm: true, // Crucial for allowing immediate signInWithPassword
    });

    if (signUpError || !signUpData.user) {
      console.error("[Onboarding API] User creation failed:", signUpError);
      return NextResponse.json({ error: signUpError?.message || "User creation failed" }, { status: 400 });
    }
    const user = signUpData.user;
    console.log("[Onboarding API] User created:", user.id);

    // 2. Create profile row in your 'profiles' table
    console.log("[Onboarding API] Inserting profile row...");
    const { error: profileError } = await supabase.from("profiles").insert({
      id: user.id, // Link to auth.users.id
      profile_type: "company", // Or 'individual', 'employer', etc.
      // Add other default profile data if needed
    });

    if (profileError) {
      console.error("[Onboarding API] Profile creation failed:", profileError);
      // Consider rolling back user creation here if profile is essential
      return NextResponse.json({ error: profileError.message }, { status: 400 });
    }
    console.log("[Onboarding API] Profile row inserted for user:", user.id);

    // 3. Create company row in your 'companies' table
    console.log("[Onboarding API] Inserting company row...");
    const { data: companyInsert, error: companyError } = await supabase.from("companies").insert({
      user_id: user.id, // Link to auth.users.id
      company_name: companyName,
      contact_name: fullName,
      email: email, // Store email in company table too for convenience
      contact_title: contactTitle || null,
      industry: companyIndustry,
      company_size: companySize,
      // Add other company specific data
    }).select("*").single(); // Select the inserted row and expect one

    if (companyError || !companyInsert) {
      console.error("[Onboarding API] Company creation failed:", companyError);
      // Consider rolling back user creation and profile creation here
      return NextResponse.json({ error: companyError?.message || "Company creation failed" }, { status: 400 });
    }
    console.log("[Onboarding API] Company row inserted:", companyInsert.id);

    // 4. Create a session for the user (sign in)
    // This will succeed because email_confirm was set to true during createUser.
    console.log("[Onboarding API] Signing in user...");
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError || !signInData.session) {
      console.error("[Onboarding API] Sign in failed:", signInError);
      // This is less likely to happen if createUser was successful with email_confirm: true
      return NextResponse.json({ error: signInError?.message || "Sign in failed" }, { status: 400 });
    }
    console.log("[Onboarding API] User signed in:", user.id);

    // 5. AFTER successful sign-in, update email_confirm to false
    // This is for your application's internal logic to show the "Please Confirm Your Email" block.
    // It reverts the email_confirmed_at timestamp to NULL in auth.users table.
    console.log("[Onboarding API] Setting user email_confirm to false for soft block...");
    const { data: updatedUser, error: updateEmailConfirmError } = await supabase.auth.admin.updateUserById(
      user.id,
      { email_confirm: false }
    );

    if (updateEmailConfirmError) {
      console.error("[Onboarding API] Failed to set email_confirm to false:", updateEmailConfirmError);
      // This error might not be critical enough to stop the entire flow,
      // as the user is already signed in. Log it and continue.
    } else {
      console.log("[Onboarding API] User email_confirm status updated to false for user:", user.id);
    }

    // 6. Return access_token, refresh_token, user info, and company info
    return NextResponse.json({
      message: "Onboarding successful!",
      token: signInData.session.access_token,
      refresh_token: signInData.session.refresh_token,
      user: {
        id: user.id,
        email: user.email,
        email_confirmed_at: updatedUser?.user?.email_confirmed_at || null, // Will be null due to update
      },
      company: companyInsert,
    }, { status: 200 });

  } catch (error) {
    console.error("[Onboarding API] Unexpected error:", error);
    // Handle any unexpected errors
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}