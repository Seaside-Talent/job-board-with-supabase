"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Building,
  Mail,
  User,
  FileText,
  Brain,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  CreditCard,
  Sparkles,
  Clock,
  Shield,
  Users,
  Zap
} from "lucide-react";
import PublicHeader from "@/components/public-header";
import { createClient } from "@/lib/supabase/client";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface CompanyData {
  name: string;
  companyName: string;
  email: string;
  title: string;
  industry: string;
  companySize: string;
}

interface JobData {
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
}

interface PlanData {
  selectedPlan: string;
}

interface User {
  id: string;
  email?: string;
  user_metadata?: { name?: string };
}

interface ApiResponse {
  token?: string;
  refresh_token?: string;
  user?: User;
  company?: { id: string; name: string; industry?: string; size?: string };
  job?: { id: string; title: string; location: string; type: string };
  company_plan?: { id: string; company_id: string; plan_id: string };
  error?: string;
}

const plans = [
  {
    id: "free",
    name: "Starter",
    price: "Free",
    description: "Perfect for small healthcare organizations",
    features: [
      "Up to 5 job postings",
      "Basic candidate matching",
      "Email support",
      "Standard compliance tools"
    ],
    popular: false
  },
  {
    id: "professional",
    name: "Professional",
    price: "$99/month",
    description: "Ideal for growing healthcare teams",
    features: [
      "Unlimited job postings",
      "Advanced AI matching",
      "Priority support",
      "Full compliance suite",
      "Background check integration",
      "Analytics dashboard"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For large healthcare systems",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced reporting",
      "API access"
    ],
    popular: false
  }
];

const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Per diem"];
const industries = ["Hospital", "Nursing Home", "Clinic", "Home Health", "Mental Health", "Rehabilitation", "Other"];
const companySizes = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"];

export default function CompanyOnboardingPage() {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
    companyName: "",
    email: "",
    title: "",
    industry: "",
    companySize: ""
  });
  const [jobData, setJobData] = useState<JobData>({
    title: "",
    description: "",
    location: "",
    type: "",
    salary: ""
  });
  const [planData, setPlanData] = useState<PlanData>({
    selectedPlan: "free"
  });
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [devModalOpen, setDevModalOpen] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [clientToken, setClientToken] = useState<string | null>(null);
  const [clientUser, setClientUser] = useState<User | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [jobApiResponse, setJobApiResponse] = useState<ApiResponse | null>(null);
  const [planApiResponse, setPlanApiResponse] = useState<ApiResponse | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      setClientToken(data.session?.access_token || null);
      setClientUser(data.session?.user || null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setClientToken(session?.access_token || null);
      setClientUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleCompanyDataChange = (field: keyof CompanyData, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const handleJobDataChange = (field: keyof JobData, value: string | string[]) => {
    setJobData(prev => ({ ...prev, [field]: value }));
  };

  const generateJobDescription = async () => {
    if (!jobData.title || !companyData.industry) return;

    setIsGeneratingDescription(true);

    // Simulate AI generation
    setTimeout(() => {
      const generatedDescription = `We are seeking a dedicated ${jobData.title} to join our ${companyData.industry.toLowerCase()} team. 

Key Responsibilities:
• Provide exceptional patient care and support
• Collaborate with healthcare professionals
• Maintain accurate patient records
• Follow established protocols and procedures
• Participate in ongoing training and development

Requirements:
• Valid healthcare license/certification
• Minimum 1-2 years experience in ${companyData.industry.toLowerCase()}
• Strong communication and interpersonal skills
• Ability to work in a fast-paced environment
• Commitment to patient safety and quality care

Benefits:
• Competitive salary and benefits package
• Professional development opportunities
• Supportive work environment
• Flexible scheduling options

Join our team and make a difference in healthcare!`;

      setJobData(prev => ({ ...prev, description: generatedDescription }));
      setIsGeneratingDescription(false);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return companyData.name && companyData.companyName && companyData.email && companyData.title;
      case 2:
        return jobData.title && jobData.location && jobData.type;
      case 3:
        return planData.selectedPlan;
      case 4:
        return emailConfirmed;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    // Handle final submission
    console.log("Onboarding completed:", { companyData, jobData, planData });
    // Redirect to dashboard or job posting page
    window.location.href = "/protected";
  };

  // Step 1: Submit to onboarding API
  const handleStep1 = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const res = await fetch("/onboarding/company/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: companyData.name,
          email: companyData.email,
          password: Math.random().toString(36).slice(-12) + Date.now(), // random password
          companyName: companyData.companyName,
          companyIndustry: companyData.industry,
          companySize: companyData.companySize,
          contactTitle: companyData.title,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to create user/company.");
        setLoading(false);
        return;
      }
      setAuthToken(data.token);
      setRefreshToken(data.refresh_token);
      // Set Supabase session manually
      const supabase = createClient();
      const { error } = await supabase.auth.setSession({
        access_token: data.token,
        refresh_token: data.refresh_token,
      });
      if (error) {
        console.error("Error setting Supabase session:", error.message);
        setErrorMsg("Failed to authenticate user");
        setLoading(false);
        return;
      }
      setLoading(false);
      setCurrentStep(currentStep + 1);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  };

  const handleStep2 = async () => {
    setErrorMsg(null);
    setLoading(true);
    setJobApiResponse(null);
    try {
      // Parse salary range if needed
      let salaryMin = null, salaryMax = null;
      if (jobData.salary) {
        const match = jobData.salary.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
        if (match) {
          salaryMin = parseFloat(match[1].replace(/,/g, ''));
          salaryMax = parseFloat(match[2].replace(/,/g, ''));
        }
      }
      const res = await fetch("/onboarding/company/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(clientToken ? { Authorization: `Bearer ${clientToken}` } : {}),
        },
        body: JSON.stringify({
          title: jobData.title,
          description: jobData.description,
          location: jobData.location,
          job_type: jobData.type,
          salary_min: salaryMin,
          salary_max: salaryMax,
          // requirements, responsibilities, posted_at, expires_at can be added if collected
        }),
      });
      const data = await res.json();
      setJobApiResponse(data);
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to create job.");
        setLoading(false);
        return;
      }
      setLoading(false);
      setCurrentStep(currentStep + 1);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  };

  const handleStep3 = async () => {
    setErrorMsg(null);
    setLoading(true);
    setPlanApiResponse(null);
    try {
      const res = await fetch("/onboarding/company/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(clientToken ? { Authorization: `Bearer ${clientToken}` } : {}),
        },
        body: JSON.stringify({
          plan_name: planData.selectedPlan,
        }),
      });
      const data = await res.json();
      setPlanApiResponse(data);
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to select plan.");
        setLoading(false);
        return;
      }
      setLoading(false);
      setCurrentStep(currentStep + 1);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  };

  const handleSetPassword = async () => {
    setErrorMsg(null);
    // Password security checks
    const minLength = 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < minLength) {
      setErrorMsg("Password must be at least 8 characters long");
      return;
    }
    if (!hasUpper || !hasLower) {
      setErrorMsg("Password must include both uppercase and lowercase letters");
      return;
    }
    if (!hasNumber) {
      setErrorMsg("Password must include at least one number");
      return;
    }
    if (!hasSpecial) {
      setErrorMsg("Password must include at least one special character");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password });
      setLoading(false);
      if (error) {
        setErrorMsg(error.message);
        return;
      }
      setShowCongrats(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  };

  // Password requirement checks
  const minLength = 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordValid = password.length >= minLength && hasUpper && hasLower && hasNumber && hasSpecial;
  const passwordsMatch = password === confirmPassword && password.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <PublicHeader />

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Company Onboarding</h1>
            <div className="text-sm text-gray-600">Step {currentStep} of 4</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Company Information */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
            </div>
            <p className="text-gray-600 mb-8">Tell us about your organization to get started.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={companyData.name}
                  onChange={(e) => handleCompanyDataChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={companyData.companyName}
                  onChange={(e) => handleCompanyDataChange("companyName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  value={companyData.email}
                  onChange={(e) => handleCompanyDataChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Title *
                </label>
                <input
                  type="text"
                  value={companyData.title}
                  onChange={(e) => handleCompanyDataChange("title", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., HR Director, Hiring Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={companyData.industry}
                  onChange={(e) => handleCompanyDataChange("industry", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  value={companyData.companySize}
                  onChange={(e) => handleCompanyDataChange("companySize", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          
            {errorMsg && <div className="mt-4 text-red-600 text-sm font-semibold text-center">{errorMsg}</div>}
          </div>
        )}

        {/* Step 2: Job Creation */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Create Your First Job</h2>
            </div>
            <p className="text-gray-600 mb-8">Let's create your first job posting with AI assistance.</p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={jobData.title}
                    onChange={(e) => handleJobDataChange("title", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Registered Nurse, Physical Therapist"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={jobData.location}
                    onChange={(e) => handleJobDataChange("location", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Boston, MA"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    value={jobData.type}
                    onChange={(e) => handleJobDataChange("type", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select job type</option>
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={jobData.salary}
                    onChange={(e) => handleJobDataChange("salary", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $60,000 - $80,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <div className="space-y-3">
                  <textarea
                    value={jobData.description}
                    onChange={(e) => handleJobDataChange("description", e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter job description or use AI to generate one..."
                  />
                  <button
                    type="button"
                    onClick={generateJobDescription}
                    disabled={isGeneratingDescription || !jobData.title || !companyData.industry}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGeneratingDescription ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate with AI
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Plan Selection */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
            </div>
            <p className="text-gray-600 mb-8">Select the plan that best fits your hiring needs.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${planData.selectedPlan === plan.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                  onClick={() => setPlanData({ selectedPlan: plan.id })}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Set Password */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {showCongrats ? (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <Confetti width={width} height={height} numberOfPieces={350} recycle={false} />
                <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">🎉 All Steps Complete!</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">Congrats! Your company profile is ready.<br />You can now publish your job, invite coworkers, and more from your dashboard.</p>
                <Link
                  href="/protected"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition inline-block text-center"
                >
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Set Your Password</h2>
                <p className="text-gray-600 mb-6">
                  To complete your account, please set a password for future logins.
                </p>
                <form className="w-full max-w-md mx-auto" onSubmit={e => { e.preventDefault(); }}>
                  <input
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setPasswordTouched(true); }}
                    placeholder="New password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-2"
                    required
                    onBlur={() => setPasswordTouched(true)}
                  />
                  {passwordTouched && (
                    <ul className="mb-2 text-xs text-gray-700 space-y-1">
                      <li className={password.length >= minLength ? "text-green-600" : "text-gray-500"}>
                        {password.length >= minLength ? "✓" : "✗"} At least 8 characters
                      </li>
                      <li className={hasUpper && hasLower ? "text-green-600" : "text-gray-500"}>
                        {hasUpper && hasLower ? "✓" : "✗"} Uppercase and lowercase letters
                      </li>
                      <li className={hasNumber ? "text-green-600" : "text-gray-500"}>
                        {hasNumber ? "✓" : "✗"} At least one number
                      </li>
                      <li className={hasSpecial ? "text-green-600" : "text-gray-500"}>
                        {hasSpecial ? "✓" : "✗"} At least one special character
                      </li>
                    </ul>
                  )}
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); setConfirmTouched(true); }}
                    placeholder="Confirm password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-2"
                    required
                    onBlur={() => setConfirmTouched(true)}
                  />
                  {confirmTouched && (
                    <div className={`text-xs font-semibold mb-2 ${passwordsMatch ? "text-green-600" : "text-red-600"}`}>
                      {passwordsMatch ? "✓ Passwords match" : "✗ Passwords do not match"}
                    </div>
                  )}
                </form>
                {errorMsg && <div className="mt-4 text-red-600 text-sm font-semibold text-center">{errorMsg}</div>}
              </>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
         {
          !showCongrats && (
            <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          )
         }

          {currentStep === 4 ? !showCongrats && (
            <button
              onClick={handleSetPassword}
              disabled={loading || !passwordValid || !passwordsMatch}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-4 h-4" />
              Complete Setup
            </button>
          ) : (
            <button
              onClick={currentStep === 1 ? handleStep1 : currentStep === 2 ? handleStep2 : currentStep === 3 ? handleStep3 : nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Floating Dev Tool Button and Modal */}
      {devModalOpen && (
        <div className="fixed bottom-24 right-4 z-50 bg-white border border-blue-500 rounded-lg shadow-lg p-6 max-w-2xl w-[90vw] text-xs text-gray-800">
          <div className="font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5v-2.25A2.25 2.25 0 0014.25 3h-4.5A2.25 2.25 0 007.5 5.25V7.5m9 0h-9m9 0v9.75A2.25 2.25 0 0114.25 19.5h-4.5A2.25 2.25 0 017.5 17.25V7.5m9 0h-9" /></svg>
            Dev State
          </div>
          <div className="mb-2"><span className="font-semibold">companyData:</span> <pre className="break-all whitespace-pre-wrap">{JSON.stringify(companyData, null, 2)}</pre></div>
          <div className="mb-2"><span className="font-semibold">jobData:</span> <pre className="break-all whitespace-pre-wrap">{JSON.stringify(jobData, null, 2)}</pre></div>
          <div className="mb-2"><span className="font-semibold">planData:</span> <pre className="break-all whitespace-pre-wrap">{JSON.stringify(planData, null, 2)}</pre></div>
          <div className="mb-2"><span className="font-semibold">API access_token:</span> <pre className="break-all whitespace-pre-wrap">{authToken || 'No token yet.'}</pre></div>
          <div className="mb-2"><span className="font-semibold">API refresh_token:</span> <pre className="break-all whitespace-pre-wrap">{refreshToken || 'No token yet.'}</pre></div>
          <div className="mb-2"><span className="font-semibold">Client authToken:</span> <pre className="break-all whitespace-pre-wrap">{clientToken || 'No token yet.'}</pre></div>
          <div className="mb-2"><span className="font-semibold">Client user:</span> <pre className="break-all whitespace-pre-wrap">{clientUser ? JSON.stringify(clientUser, null, 2) : 'No user'}</pre></div>
          {jobApiResponse && <div className="mb-2"><span className="font-semibold">Job API response:</span> <pre className="break-all whitespace-pre-wrap">{JSON.stringify(jobApiResponse, null, 2)}</pre></div>}
          {planApiResponse && <div className="mb-2"><span className="font-semibold">Plan API response:</span> <pre className="break-all whitespace-pre-wrap">{JSON.stringify(planApiResponse, null, 2)}</pre></div>}
          {errorMsg && <div className="mb-2 text-red-600 font-semibold">Error: {errorMsg}</div>}
          <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => setDevModalOpen(false)}>Close</button>
        </div>
      )}
      <button
        className="fixed bottom-6 right-4 z-50 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700"
        onClick={() => setDevModalOpen(true)}
        title="Show Dev State"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5v-2.25A2.25 2.25 0 0014.25 3h-4.5A2.25 2.25 0 007.5 5.25V7.5m9 0h-9m9 0v9.75A2.25 2.25 0 0114.25 19.5h-4.5A2.25 2.25 0 017.5 17.25V7.5m9 0h-9" />
        </svg>
      </button>
    </div>
  );
} 