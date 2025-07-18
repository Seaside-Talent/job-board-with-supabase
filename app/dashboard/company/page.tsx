"use client";
import { Briefcase, Users, CheckCircle, ArrowRight } from "lucide-react";

const recentActivity = [
  "Jane Doe applied to Registered Nurse - ICU",
  "Interview scheduled with Alice Lee",
  "Offer sent to Bob Brown",
  "John Smith moved to Reviewed",
];

export default function CompanyOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-1">Welcome, Acme Health</h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Open Roles: 2</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Candidates: 10</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Hires: 1</span>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <a href="/dashboard/company/roles" className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:bg-blue-100 transition">
          <span className="text-blue-700 mb-2"><Briefcase className="h-8 w-8" /></span>
          <span className="font-bold text-lg mb-1">Manage Roles</span>
          <span className="text-gray-600 text-sm mb-2">Create and edit position templates for your company.</span>
          <span className="text-blue-700 font-semibold flex items-center gap-1">Go <ArrowRight className="h-4 w-4" /></span>
        </a>
        <a href="/dashboard/company/job-postings" className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:bg-blue-100 transition">
          <span className="text-blue-700 mb-2"><Users className="h-8 w-8" /></span>
          <span className="font-bold text-lg mb-1">Manage Job Postings</span>
          <span className="text-gray-600 text-sm mb-2">View, post, and track job openings and applicants.</span>
          <span className="text-blue-700 font-semibold flex items-center gap-1">Go <ArrowRight className="h-4 w-4" /></span>
        </a>
        <a href="/dashboard/company/admin" className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:bg-blue-100 transition">
          <span className="text-blue-700 mb-2"><CheckCircle className="h-8 w-8" /></span>
          <span className="font-bold text-lg mb-1">Admin Users</span>
          <span className="text-gray-600 text-sm mb-2">Manage company users, roles, and permissions.</span>
          <span className="text-blue-700 font-semibold flex items-center gap-1">Go <ArrowRight className="h-4 w-4" /></span>
        </a>
      </div>
      <div>
        <h2 className="text-xl font-bold text-blue-800 mb-4">Recent Activity</h2>
        <ul className="bg-white rounded-xl shadow divide-y divide-blue-50">
          {recentActivity.map((a, i) => (
            <li key={i} className="px-6 py-4 text-gray-700 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-blue-400" /> {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 