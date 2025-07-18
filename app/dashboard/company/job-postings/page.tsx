"use client";
import { Plus, Briefcase } from "lucide-react";

const mockJobs = [
  { id: 1, title: "Registered Nurse - ICU", status: "Open", applicants: 5 },
  { id: 2, title: "Physical Therapist", status: "Closed", applicants: 2 },
  { id: 3, title: "Medical Assistant", status: "Open", applicants: 3 },
];

export default function JobPostingsPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">Job Postings</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"><Plus className="h-4 w-4" /> Post New Job</button>
      </div>
      <ul className="divide-y divide-blue-50">
        {mockJobs.map(job => (
          <li key={job.id} className="py-4 flex items-center gap-4">
            <Briefcase className="h-6 w-6 text-blue-600" /> {job.title} <span className={`ml-auto text-xs px-2 py-1 rounded-full ${job.status === "Open" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>{job.status}</span>
            <span className="ml-2 text-xs text-gray-500">{job.applicants} applicants</span>
            <button className="ml-2 text-blue-600 hover:underline text-xs">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 