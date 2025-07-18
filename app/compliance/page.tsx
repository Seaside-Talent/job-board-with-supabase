"use client";

import Link from "next/link";
import Head from "next/head";
import PublicHeader from "@/components/public-header";
import { ShieldCheck, Lock, FileText, Users, Cloud, ClipboardList } from "lucide-react";

const badges = [
  { icon: <ShieldCheck className="inline w-5 h-5 mr-1 text-blue-700" />, label: "HIPAA Compliant" },
  { icon: <Users className="inline w-5 h-5 mr-1 text-blue-700" />, label: "Role-Based Access Control" },
  { icon: <ClipboardList className="inline w-5 h-5 mr-1 text-blue-700" />, label: "SOC 2 (In Progress)" },
  { icon: <Lock className="inline w-5 h-5 mr-1 text-blue-700" />, label: "Encrypted File Uploads" },
  { icon: <FileText className="inline w-5 h-5 mr-1 text-blue-700" />, label: "Audit Logs" },
  { icon: <Cloud className="inline w-5 h-5 mr-1 text-blue-700" />, label: "Secure Infrastructure" },
];

const features = [
  {
    icon: <Lock className="w-8 h-8 text-blue-700 mb-2" />,
    title: "End-to-End Encryption",
    desc: "All sensitive data is encrypted at rest and in transit (TLS 1.2+). Uploaded credentials are securely stored and access-controlled.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700 mb-2" />,
    title: "Role-Based Access Control (RBAC)",
    desc: "Only authorized users (e.g., credentialing, HR) can view sensitive applicant data. Permissions are enforced across web and API layers.",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-700 mb-2" />,
    title: "Secure Document Uploads",
    desc: "Candidates upload licenses and credentials via encrypted channels. Employers see only verified or permissioned documents.",
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-blue-700 mb-2" />,
    title: "Audit Readiness",
    desc: "Full activity logs for every hire. Exportable logs for compliance reporting and audits (e.g., license validation history, access logs).",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700 mb-2" />,
    title: "SOC 2 (Coming Soon)",
    desc: "Infrastructure follows SOC 2 Type I/II best practices. Hosted on secure, monitored environments (e.g., Supabase + S3 with access controls).",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-700 mb-2" />,
    title: "Secure Infrastructure",
    desc: "Built on enterprise-grade cloud infrastructure with 99.9% uptime, automated backups, and disaster recovery protocols.",
  },
];

const faqs = [
  {
    q: "How is my license data stored?",
    a: "All license and credential data is encrypted at rest and in transit. Only authorized users can access your documents, and every access is logged.",
  },
  {
    q: "Can I delete or restrict access to my documents?",
    a: "Yes. You can request deletion or restrict access at any time. Contact us for assistance.",
  },
  {
    q: "Does Seaside share my info with third parties?",
    a: "No. We never sell or share your data except as required for hiring workflows and with your consent.",
  },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      <Head>
        <title>Built for Compliance. Trusted by Healthcare Teams. | Seaside Talent</title>
        <meta name="description" content="Seaside Talent is a HIPAA-compliant job board for healthcare, with end-to-end encryption, audit logs, and secure infrastructure. Trusted by healthcare teams." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Built for Compliance. Trusted by Healthcare Teams." />
        <meta property="og:description" content="Seaside Talent is a HIPAA-compliant job board for healthcare, with end-to-end encryption, audit logs, and secure infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seasidetalent.com/compliance" />
      </Head>
      <PublicHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">HIPAA</span> Compliant & Secure
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto">
              Built from day one to meet the highest standards of healthcare compliance, data security, and auditability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-rose-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                View Security Documentation
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Compliance Badges */}
      <div className="w-full flex flex-wrap justify-center gap-4 py-6 px-4 bg-white/80 shadow-inner">
        {badges.map((b, i) => (
          <span key={i} className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm shadow-sm border border-blue-200">
            {b.icon} {b.label}
          </span>
        ))}
      </div>
      {/* Features Overview */}
      <div className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100">
            {f.icon}
            <div className="font-bold text-lg mb-2 text-blue-800">{f.title}</div>
            <div className="text-gray-700 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
      {/* Trust Statement */}
      <div className="max-w-2xl mx-auto my-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl shadow text-blue-900 text-base font-medium">
        "We never sell candidate data, and we only share what's required for successful hiring workflows. Every access is logged. Every document is traceable. Our mission is to make compliance the default — not an afterthought."
      </div>
      {/* FAQs */}
      <div className="max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 border border-blue-100">
              <div className="font-semibold text-blue-700 mb-1">{faq.q}</div>
              <div className="text-gray-700 text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
        <Link href="/for-employers" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow hover:from-blue-700 hover:to-blue-600 transition text-lg">Learn More About Employer Plans</Link>
        <a href="mailto:security@seasidetalent.com" className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-700 font-bold bg-white shadow hover:bg-blue-50 transition text-lg">Request Security Documentation</a>
      </div>
      {/* Footer (copied from landing page) */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600 mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Seaside Talent. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms</Link>
          <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
} 