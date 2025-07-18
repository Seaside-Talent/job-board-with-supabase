"use client";
import { useState } from "react";
import Link from "next/link";
import { Briefcase, CheckCircle, FileText, User, Mail, Star, ArrowRight, Edit, Bell } from "lucide-react";

const recommendedJobs = [
  { id: 1, title: "Registered Nurse - ICU", company: "MGH", location: "Boston, MA" },
  { id: 2, title: "Physical Therapist", company: "BIDMC", location: "Boston, MA" },
];
const applications = [
  { id: 1, title: "Registered Nurse - ICU", company: "MGH", status: "Interview" },
  { id: 2, title: "Physical Therapist", company: "BIDMC", status: "Applied" },
];
const notifications = [
  "Your application was viewed by MGH",
  "Interview scheduled for RN - ICU",
  "New job matches available",
];

export default function JobSeekerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <header className="bg-white shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-green-800 mb-1">Welcome, Jane Doe</h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Applications: 4</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Interviews: 1</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4" /> Offers: 0</span>
          </div>
        </div>
        <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition">
          <Edit className="h-5 w-5" /> Update Resume / Profile
        </Link>
      </header>
      <main className="flex-1 max-w-5xl mx-auto w-full py-10 px-4">
        {/* Recommended Jobs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Jobs</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {recommendedJobs.map(job => (
              <div key={job.id} className="min-w-[260px] bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">{job.title}</span>
                </div>
                <div className="text-gray-700 text-sm">{job.company}</div>
                <div className="text-gray-500 text-xs mb-2">{job.location}</div>
                <Link href="#" className="text-green-700 hover:underline text-sm flex items-center gap-1 font-semibold">
                  <ArrowRight className="h-4 w-4" /> View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Applications Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Applications</h2>
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Job Title</th>
                  <th className="px-6 py-3 text-left font-semibold">Company</th>
                  <th className="px-6 py-3 text-left font-semibold">Status</th>
                  <th className="px-6 py-3 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 font-medium">{app.title}</td>
                    <td className="px-6 py-4">{app.company}</td>
                    <td className="px-6 py-4">{app.status}</td>
                    <td className="px-6 py-4">
                      <Link href="#" className="text-green-700 hover:underline flex items-center gap-1">
                        <FileText className="h-4 w-4" /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Resume/Profile Card */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Resume & Profile</h2>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 border border-green-100">
            <User className="h-10 w-10 text-green-600" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Jane Doe</div>
              <div className="text-gray-700 text-sm mb-2">Registered Nurse - ICU</div>
              <div className="text-xs text-gray-500 mb-2">Profile Completeness: <span className="font-bold text-green-700">80%</span></div>
              <Link href="#" className="text-green-700 hover:underline text-sm flex items-center gap-1 font-semibold">
                <Edit className="h-4 w-4" /> Edit Profile
              </Link>
            </div>
          </div>
        </section>
        {/* Notifications */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Notifications</h2>
          <ul className="bg-white rounded-xl shadow divide-y divide-green-50">
            {notifications.map((n, i) => (
              <li key={i} className="px-6 py-4 text-gray-700 flex items-center gap-2">
                <Bell className="h-4 w-4 text-green-400" /> {n}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
} 