"use client";

import { useState } from "react";
import Link from "next/link";
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
  requirements: string[];
}

interface PlanData {
  selectedPlan: string;
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
    salary: "",
    requirements: []
  });
  const [planData, setPlanData] = useState<PlanData>({
    selectedPlan: "free"
  });
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  // 1. Add state for the new requirement input
  const [newRequirement, setNewRequirement] = useState("");

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

  // 2. Replace addRequirement with a function that uses the input field
  const addRequirement = () => {
    const trimmed = newRequirement.trim();
    if (trimmed && !jobData.requirements.includes(trimmed)) {
      setJobData(prev => ({
        ...prev,
        requirements: [...prev.requirements, trimmed]
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setJobData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                <div className="space-y-3">
                  {/* 1. Replace requirements input UI with inline tag input */}
                  <div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500">
                    {jobData.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium border border-gray-200"
                      >
                        {req}
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="ml-1 text-gray-400 hover:text-red-500 focus:outline-none"
                          aria-label={`Remove ${req}`}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={newRequirement}
                      onChange={e => setNewRequirement(e.target.value)}
                      onKeyDown={e => {
                        if ((e.key === "Enter" || e.key === ",") && newRequirement.trim()) {
                          e.preventDefault();
                          addRequirement();
                        } else if (e.key === "Backspace" && !newRequirement && jobData.requirements.length > 0) {
                          // Remove last tag on backspace if input is empty
                          removeRequirement(jobData.requirements.length - 1);
                        }
                      }}
                      className="flex-grow min-w-[120px] border-none focus:ring-0 text-sm py-1 px-2 bg-transparent outline-none"
                      placeholder={jobData.requirements.length === 0 ? "Add a requirement and press Enter" : ""}
                      aria-label="Add requirement"
                    />
                  </div>
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

        {/* Step 4: Email Confirmation */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Confirm Your Email</h2>
            </div>
            <p className="text-gray-600 mb-8">We've sent a confirmation email to {companyData.email}. Please check your inbox and click the confirmation link.</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Email Sent!</h3>
                  <p className="text-blue-800 text-sm">
                    We've sent a confirmation email to <strong>{companyData.email}</strong>.
                    Please check your inbox and spam folder.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setEmailConfirmed(true)}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                I've Confirmed My Email
              </button>

              <div className="text-center">
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Didn't receive the email? Resend
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          {currentStep === 4 ? (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-4 h-4" />
              Complete Setup
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 