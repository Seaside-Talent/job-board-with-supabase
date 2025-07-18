"use client";
import { useRouter } from "next/navigation";
import { Briefcase, User } from "lucide-react";
import PublicHeader from "@/components/public-header";

export default function OnboardingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <PublicHeader />
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gray-900 drop-shadow-sm">Get Started: Who Are You?</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center">
          {/* Employer Card */}
          <button
            className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-blue-500 p-8 flex flex-col items-center text-center group focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => router.push("/onboarding/company")}
          >
            <div className="bg-blue-100 rounded-full p-4 mb-4 group-hover:bg-blue-200 transition">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-700">I am an Employer</h2>
            <p className="text-gray-600 mb-2">Post jobs, manage applicants, and find the best healthcare talent for your organization.</p>
          </button>
          {/* Job Seeker Card */}
          <button
            className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-green-500 p-8 flex flex-col items-center text-center group focus:outline-none focus:ring-4 focus:ring-green-200"
            onClick={() => router.push("/onboarding/jobseeker")}
          >
            <div className="bg-green-100 rounded-full p-4 mb-4 group-hover:bg-green-200 transition">
              <User className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-green-700">I am a Job Seeker</h2>
            <p className="text-gray-600 mb-2">Create your profile, showcase your skills, and apply to top healthcare jobs.</p>
          </button>
        </div>
      </main>
    </div>
  );
}
