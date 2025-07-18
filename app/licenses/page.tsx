"use client";

import Link from "next/link";
import PublicHeader from "@/components/public-header";
import { ShieldCheck, FileText, HeartPulse, ClipboardList, UploadCloud, Award, UserCheck, Stethoscope, Badge, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700 mb-2" />,
    title: "License Filtering",
    desc: "Instantly filter candidates by license, certification, and compliance status."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-blue-700 mb-2" />,
    title: "In-House CPR Certification",
    desc: "Complete CPR certification with our certified instructors—no external providers needed."
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-blue-700 mb-2" />,
    title: "A La Carte Background Checks",
    desc: "Order and track CORI, SORI, SAM, OIG, and more—all in one place."
  },
  {
    icon: <UploadCloud className="w-8 h-8 text-blue-700 mb-2" />,
    title: "Secure Document Uploads",
    desc: "Upload, verify, and store all compliance docs securely."
  },
];

const healthcareLicenses = [
  {
    name: "CPR/BLS Certification",
    description: "Basic Life Support and CPR certification with our certified instructors",
    status: "In-House Available",
    icon: <HeartPulse className="h-5 w-5 text-green-600" />
  },
  {
    name: "RN License Verification",
    description: "Real-time verification of Registered Nurse licenses across all states",
    status: "Automated",
    icon: <Stethoscope className="h-5 w-5 text-blue-600" />
  },
  {
    name: "LPN License Verification",
    description: "Licensed Practical Nurse license verification and tracking",
    status: "Automated",
    icon: <Stethoscope className="h-5 w-5 text-blue-600" />
  },
  {
    name: "CNA Certification",
    description: "Certified Nursing Assistant certification verification",
    status: "Automated",
    icon: <UserCheck className="h-5 w-5 text-purple-600" />
  },
  {
    name: "CORI Background Check",
    description: "Massachusetts Criminal Offender Record Information checks",
    status: "Integrated",
    icon: <ShieldCheck className="h-5 w-5 text-red-600" />
  },
  {
    name: "SORI Background Check",
    description: "Sex Offender Registry Information verification",
    status: "Integrated",
    icon: <ShieldCheck className="h-5 w-5 text-orange-600" />
  },
  {
    name: "SAM & OIG Checks",
    description: "System for Award Management and Office of Inspector General exclusions",
    status: "Integrated",
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />
  },
  {
    name: "Immunization Records",
    description: "Track and verify required immunizations (Hepatitis B, MMR, etc.)",
    status: "Document Upload",
    icon: <FileText className="h-5 w-5 text-green-600" />
  },
  {
    name: "TB Testing",
    description: "Tuberculosis testing documentation and tracking",
    status: "Document Upload",
    icon: <FileText className="h-5 w-5 text-green-600" />
  },
  {
    name: "ACLS Certification",
    description: "Advanced Cardiovascular Life Support certification",
    status: "Coming Soon",
    icon: <Award className="h-5 w-5 text-blue-600" />
  },
  {
    name: "PALS Certification",
    description: "Pediatric Advanced Life Support certification",
    status: "Coming Soon",
    icon: <Award className="h-5 w-5 text-blue-600" />
  },
  {
    name: "Specialty Certifications",
    description: "Wound care, IV therapy, medication administration, and more",
    status: "Document Upload",
    icon: <Badge className="h-5 w-5 text-purple-600" />
  }
];

export default function LicensesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      <PublicHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">License</span> Filtering & Readiness
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Instantly filter, verify, and complete credentials—CPR, CORI, SORI, SAM, and more—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/onboarding/company" className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-8 py-3 rounded-lg transition-colors block text-center">
                Start Free Trial
              </a>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Overview */}
      <div className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100">
            {f.icon}
            <div className="font-bold text-lg mb-2 text-blue-800">{f.title}</div>
            <div className="text-gray-700 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* In-House CPR Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartPulse className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In-House CPR Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete CPR and BLS certification with our certified instructors—no need for external providers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <h3 className="font-semibold text-gray-900">Certified Instructors</h3>
              </div>
              <p className="text-gray-600 text-sm">Our instructors are certified by the American Heart Association and Red Cross.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <h3 className="font-semibold text-gray-900">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-600 text-sm">Book sessions that fit your schedule—weekdays, weekends, and evenings available.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-purple-600 mr-3" />
                <h3 className="font-semibold text-gray-900">Instant Certification</h3>
              </div>
              <p className="text-gray-600 text-sm">Receive your certification immediately upon completion—no waiting for external processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Licenses & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Licenses & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive verification and tracking for all healthcare credentials and compliance requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareLicenses.map((license, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    {license.icon}
                    <h3 className="font-semibold text-gray-900 ml-2">{license.name}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    license.status === 'In-House Available' ? 'bg-green-100 text-green-800' :
                    license.status === 'Automated' ? 'bg-blue-100 text-blue-800' :
                    license.status === 'Integrated' ? 'bg-purple-100 text-purple-800' :
                    license.status === 'Document Upload' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {license.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{license.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Healthcare Credentialing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join healthcare organizations that trust our platform for comprehensive license filtering and credential management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-employers" className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold transition-colors">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-lg border-2 border-white/30 hover:border-white/50 text-white font-semibold transition-colors">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Soothing Footer */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600 mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Seaside Talent. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms</Link>
          <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
        </div>
        <div className="mt-2">As Featured In: <span className="font-semibold text-gray-700">Healthcare Weekly, MedTech News</span></div>
      </footer>
    </div>
  );
} 