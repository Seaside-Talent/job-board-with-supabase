"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Users, Briefcase, CheckCircle, ClipboardList, ArrowRight, User, Mail, Search } from "lucide-react";

const mockJobs = [
  { id: 1, title: "Registered Nurse - ICU", status: "Open", applicants: 5 },
  { id: 2, title: "Physical Therapist", status: "Closed", applicants: 2 },
  { id: 3, title: "Medical Assistant", status: "Open", applicants: 3 },
];

const pipelineStages = ["New", "Reviewed", "Interview", "Offer", "Hired"];
const mockCandidates = [
  { name: "Jane Doe", stage: "New" },
  { name: "John Smith", stage: "Reviewed" },
  { name: "Alice Lee", stage: "Interview" },
  { name: "Bob Brown", stage: "Offer" },
  { name: "Sara White", stage: "Hired" },
];
const recentActivity = [
  "Jane Doe applied to Registered Nurse - ICU",
  "Interview scheduled with Alice Lee",
  "Offer sent to Bob Brown",
  "John Smith moved to Reviewed",
];

export default function CompanyDashboard() {
  const [selectedJob, setSelectedJob] = useState(mockJobs[0]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      <header className="bg-white shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-1">Welcome, Acme Health</h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Open Roles: 2</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Candidates: 10</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Hires: 1</span>
          </div>
        </div>
        <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
          <Plus className="h-5 w-5" /> Post New Role
        </Link>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full py-10 px-4">
        {/* Job Postings Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Job Postings</h2>
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Job Title</th>
                  <th className="px-6 py-3 text-left font-semibold">Status</th>
                  <th className="px-6 py-3 text-left font-semibold">Applicants</th>
                  <th className="px-6 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockJobs.map(job => (
                  <tr key={job.id} className={selectedJob.id === job.id ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 font-medium cursor-pointer" onClick={() => setSelectedJob(job)}>{job.title}</td>
                    <td className="px-6 py-4">{job.status}</td>
                    <td className="px-6 py-4">{job.applicants}</td>
                    <td className="px-6 py-4">
                      <Link href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                        <ClipboardList className="h-4 w-4" /> View Pipeline
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Candidate Pipeline */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Candidate Pipeline for: <span className="text-blue-700">{selectedJob.title}</span></h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {pipelineStages.map(stage => (
              <div key={stage} className="flex-1 min-w-[180px] bg-blue-50 rounded-xl p-4 shadow flex flex-col">
                <div className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" /> {stage}
                </div>
                <div className="flex flex-col gap-2">
                  {mockCandidates.filter(c => c.stage === stage).length === 0 && (
                    <span className="text-gray-400 text-xs">No candidates</span>
                  )}
                  {mockCandidates.filter(c => c.stage === stage).map((c, i) => (
                    <div key={i} className="bg-white rounded-lg px-3 py-2 shadow flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-gray-800">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Recent Activity */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <ul className="bg-white rounded-xl shadow divide-y divide-blue-50">
            {recentActivity.map((a, i) => (
              <li key={i} className="px-6 py-4 text-gray-700 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-400" /> {a}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
} 