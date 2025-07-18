import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  console.log("[Onboarding API] Received POST request");
  const body = await req.json();
  console.log("[Onboarding API] Request body:", body);
  const { fullName, email, password, companyName, companyIndustry, companySize, contactTitle } = body;

  const supabase = createAdminClient();

  // 1. Create user in Supabase Auth
  console.log("[Onboarding API] Creating user in Supabase Auth...");
  const { data: signUpData, error: signUpError } = await supabase.auth.admin.createUser({
    email,
    password,
    user_metadata: { name: fullName },
    email_confirm: true,
  });
  if (signUpError || !signUpData.user) {
    console.error("[Onboarding API] User creation failed:", signUpError);
    return NextResponse.json({ error: signUpError?.message || "User creation failed" }, { status: 400 });
  }
  const user = signUpData.user;
  console.log("[Onboarding API] User created:", user.id);

  // 2. Create profile row
  console.log("[Onboarding API] Inserting profile row...");
  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    profile_type: "company",
  });
  if (profileError) {
    console.error("[Onboarding API] Profile creation failed:", profileError);
    return NextResponse.json({ error: profileError.message }, { status: 400 });
  }
  console.log("[Onboarding API] Profile row inserted for user:", user.id);

  // 3. Create company row
  console.log("[Onboarding API] Inserting company row...");
  const { data: companyInsert, error: companyError } = await supabase.from("companies").insert({
    user_id: user.id,
    company_name: companyName,
    contact_name: fullName,
    email,
    contact_title: contactTitle || null,
    industry: companyIndustry,
    company_size: companySize,
  }).select("*").single();
  if (companyError || !companyInsert) {
    return NextResponse.json({ error: companyError?.message || "Company creation failed" }, { status: 400 });
  }

  // 4. Create a session for the user (sign in)
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (signInError || !signInData.session) {    console.error("[Onboarding API] Sign in failed:", signInError);
    return NextResponse.json({ error: signInError?.message || "Sign in failed" }, { status: 400 });
  }
  // 6. Return access_token and refresh_token and company info
  return NextResponse.json({
    token: signInData.session.access_token,
    refresh_token: signInData.session.refresh_token,
    user: { id: user.id, email: user.email },
    company: companyInsert,
  });
} 