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
    const { plan_name } = body;

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

    // Get the plan by plan_name
    const { data: plan, error: planError } = await supabase
      .from("plans")
      .select("id")
      .eq("plan_name", plan_name)
      .single();

    let selectedPlan = plan;
    
    if (planError || !plan) {
      // If plan does not exist, create it with default values
      const { data: newPlan, error: newPlanError } = await supabase.from("plans").insert({
        plan_name,
        description: `Auto-created plan: ${plan_name}`,
        price_monthly: 0,
        features: [],
      }).select("id").single();
      
      if (newPlanError || !newPlan) {
        return NextResponse.json({ error: newPlanError?.message || "Plan creation failed" }, { status: 400 });
      }
      selectedPlan = newPlan;
    }

    if (!selectedPlan) {
      return NextResponse.json({ error: "Failed to get or create plan" }, { status: 400 });
    }

    // Insert the company_plan
    const { data: companyPlan, error: companyPlanError } = await supabase.from("company_plans").insert({
      company_id: company.id,
      plan_id: selectedPlan.id,
    }).select("*").single();
    if (companyPlanError || !companyPlan) {
      return NextResponse.json({ error: companyPlanError?.message || "Plan selection failed" }, { status: 400 });
    }

    return NextResponse.json({ company_plan: companyPlan });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
  }
} 