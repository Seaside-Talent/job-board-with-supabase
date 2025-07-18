"use client";

import { useState } from "react";
import { User, FileText, CheckCircle, ArrowRight, ArrowLeft, CreditCard, Mail, Upload } from "lucide-react";
import PublicHeader from "@/components/public-header";

const plans = [
    {
        id: "free",
        name: "Starter",
        price: "Free",
        description: "Perfect for job seekers starting out",
        features: [
            "Apply to unlimited jobs",
            "Saved search alerts",
            "Basic profile visibility",
            "Email support"
        ],
        popular: false
    },
    {
        id: "pro",
        name: "Pro",
        price: "$1.99/month",
        description: "For active job seekers who want more insight and support",
        features: [
            "Know when your application is viewed",
            "Direct messaging with employers",
            "One time resume review",
            "AI-powered resume & cover letter suggestions",
            "Interview preparation tools",
            "Early access to new jobs",
            "Skill assessments",
        ],
        popular: true
    }
];

const healthcareRoles = [
    "Registered Nurse",
    "Licensed Practical Nurse",
    "Nurse Practitioner",
    "Physician",
    "Physician Assistant",
    "Pharmacist",
    "Physical Therapist",
    "Occupational Therapist",
    "Speech-Language Pathologist",
    "Medical Assistant",
    "Radiologic Technologist",
    "Respiratory Therapist",
    "Social Worker",
    "Dietitian",
    "Medical Laboratory Scientist",
    "Other"
];

const roleSuggestedSkills: Record<string, string[]> = {
    "Registered Nurse": ["Patient Care", "IV Therapy", "Medication Administration", "Critical Thinking"],
    "Licensed Practical Nurse": ["Patient Monitoring", "Wound Care", "Vital Signs"],
    "Nurse Practitioner": ["Diagnosis", "Prescribing Medication", "Patient Education"],
    "Physician": ["Diagnosis", "Surgery", "Patient Consultation"],
    "Pharmacist": ["Medication Dispensing", "Pharmaceutical Care", "Drug Utilization Review"],
    "Physical Therapist": ["Rehabilitation", "Exercise Therapy", "Patient Assessment"],
    "Occupational Therapist": ["Therapeutic Activities", "Patient Assessment", "Rehabilitation"],
    "Speech-Language Pathologist": ["Speech Therapy", "Language Assessment", "Patient Counseling"],
    "Medical Assistant": ["Phlebotomy", "Patient Prep", "Medical Records"],
    "Radiologic Technologist": ["X-Ray", "Imaging", "Patient Positioning"],
    "Respiratory Therapist": ["Ventilator Management", "Airway Care", "Patient Assessment"],
    "Social Worker": ["Case Management", "Counseling", "Crisis Intervention"],
    "Dietitian": ["Nutrition Counseling", "Meal Planning", "Patient Education"],
    "Medical Laboratory Scientist": ["Lab Testing", "Sample Analysis", "Quality Control"],
    "Other": [],
};

const mockResumeSkills = ["Teamwork", "Communication", "Time Management"];

export default function JobSeekerOnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [personal, setPersonal] = useState({ name: "", email: "" });
    const [role, setRole] = useState("");
    const [customRole, setCustomRole] = useState("");
    const [resume, setResume] = useState<File | null>(null);
    const [skills, setSkills] = useState<string[]>(mockResumeSkills);
    const [newSkill, setNewSkill] = useState("");
    const [plan, setPlan] = useState("pro");
    const [emailConfirmed, setEmailConfirmed] = useState(false);

    const nextStep = () => { if (currentStep < 5) setCurrentStep(currentStep + 1); };
    const prevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };
    const canProceed = () => {
        switch (currentStep) {
            case 1: return personal.name && personal.email;
            case 2: return role && (role !== "Other" || customRole) && resume;
            case 3: return skills.length > 0;
            case 4: return !!plan;
            case 5: return emailConfirmed;
            default: return false;
        }
    };
    const handleSubmit = () => {
        // Final submission logic
        window.location.href = "/protected";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
            <PublicHeader />
            <div className="max-w-2xl w-full py-8 mx-auto px-4 flex-1">
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">Job Seeker Onboarding</h1>
                        <div className="text-sm text-gray-600">Step {currentStep} of 5</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / 5) * 100}%` }}></div>
                    </div>
                </div>
                {currentStep === 1 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <User className="w-8 h-8 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input type="text" value={personal.name} onChange={e => setPersonal(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input type="email" value={personal.email} onChange={e => setPersonal(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="your@email.com" />
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-8 h-8 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Your Healthcare Role & Resume</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">What is your role in healthcare? *</label>
                                <select
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="">Select your role</option>
                                    {healthcareRoles.map(r => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>
                            {role === "Other" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Please specify your role *</label>
                                    <input
                                        type="text"
                                        value={customRole}
                                        onChange={e => setCustomRole(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Enter your role"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Upload your resume *</label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={e => setResume(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                    />
                                    {resume && <span className="text-green-700 text-sm font-medium">{resume.name}</span>}
                                    <Upload className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-xs text-gray-500 mt-2">We'll use AI to extract your experience and skills from your resume.</p>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Suggested skills based on role */}
                            {role && role !== "Other" && roleSuggestedSkills[role] && roleSuggestedSkills[role].length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Suggested Skills for {role}</label>
                                    <div className="flex flex-wrap gap-2">
                                        {roleSuggestedSkills[role].map((suggested) => (
                                            <label key={suggested} className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full border border-green-200 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={skills.includes(suggested)}
                                                    onChange={e => {
                                                        if (e.target.checked) setSkills(prev => prev.includes(suggested) ? prev : [...prev, suggested]);
                                                        else setSkills(prev => prev.filter(s => s !== suggested));
                                                    }}
                                                    className="accent-green-600"
                                                />
                                                <span className="text-green-800 text-sm">{suggested}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* All skills as removable tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Skills</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {skills.map((skill, idx) => (
                                        <span key={idx} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => setSkills(prev => prev.filter((_, i) => i !== idx))}
                                                className="ml-2 text-green-600 hover:text-red-600"
                                                aria-label={`Remove ${skill}`}
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newSkill}
                                        onChange={e => setNewSkill(e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Add a new skill"
                                        onKeyDown={e => {
                                            if (e.key === "Enter" && newSkill.trim()) {
                                                setSkills(prev => prev.includes(newSkill.trim()) ? prev : [...prev, newSkill.trim()]);
                                                setNewSkill("");
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (newSkill.trim()) {
                                                setSkills(prev => prev.includes(newSkill.trim()) ? prev : [...prev, newSkill.trim()]);
                                                setNewSkill("");
                                            }
                                        }}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 4 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="w-8 h-8 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {plans.map((p) => (
                                <div
                                    key={p.id}
                                    className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${plan === p.id
                                            ? p.id === "pro"
                                                ? 'border-green-600 bg-green-50 ring-2 ring-green-400'
                                                : 'border-green-600 bg-green-50 ring-2 ring-green-400'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    onClick={() => setPlan(p.id)}
                                >
                                    {p.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">Limitted Offer</span>
                                        </div>
                                    )}
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                                        <div className="text-3xl font-bold text-green-600 mb-1">{p.price}</div>
                                        <p className="text-sm text-gray-600">{p.description}</p>
                                    </div>
                                    <ul className="space-y-3">
                                        {p.features.map((feature, index) => (
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
                {currentStep === 5 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Mail className="w-8 h-8 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Confirm Your Email</h2>
                        </div>
                        <p className="text-gray-600 mb-8">We've sent a confirmation email to {personal.email}. Please check your inbox and click the confirmation link.</p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-green-900 mb-2">Email Sent!</h3>
                                    <p className="text-green-800 text-sm">We've sent a confirmation email to <strong>{personal.email}</strong>. Please check your inbox and spam folder.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <button onClick={() => setEmailConfirmed(true)} className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">I've Confirmed My Email</button>
                            <div className="text-center">
                                <button className="text-green-600 hover:text-green-700 text-sm">Didn't receive the email? Resend</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-between mt-8">
                    <button onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </button>
                    {currentStep === 5 ? (
                        <button onClick={handleSubmit} disabled={!canProceed()} className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            <CheckCircle className="w-4 h-4" /> Complete Setup
                        </button>
                    ) : (
                        <button onClick={nextStep} disabled={!canProceed()} className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
} 