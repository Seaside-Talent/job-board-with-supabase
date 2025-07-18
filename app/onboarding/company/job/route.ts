import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");
    const cookieStore = await cookies();

    // Create a Supabase client with the user's JWT and cookies
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          },
        },
        global: { headers: { Authorization: `Bearer ${token}` } },
      }
    );

    const body = await req.json();
    const {
      title,
      description,
      location,
      job_type,
      salary_min,
      salary_max,
      requirements,
      responsibilities,
      posted_at,
      expires_at,
    } = body;

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get the company for this user
    const { data: company, error: companyError } = await supabase
      .from("companies")
      .select("id")
      .eq("user_id", user.id)
      .single();
    if (companyError || !company) {
      return NextResponse.json({ error: "Company not found for user" }, { status: 400 });
    }

    // Insert the job
    const { data: job, error: jobError } = await supabase.from("jobs").insert({
      company_id: company.id,
      title,
      description,
      location,
      job_type,
      salary_min,
      salary_max,
      requirements,
      responsibilities,
      posted_at,
      expires_at,
    }).select("*").single();
    if (jobError || !job) {
      return NextResponse.json({ error: jobError?.message || "Job creation failed" }, { status: 400 });
    }

    return NextResponse.json({ job });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
  }
} 