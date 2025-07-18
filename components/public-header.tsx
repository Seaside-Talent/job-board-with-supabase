"use client";

import Link from "next/link";
import { useState } from "react";

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white/80 shadow-lg sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo and subtitle as a link to home */}
        <Link href="/" className="flex flex-col md:flex-row md:items-end gap-1 group cursor-pointer" tabIndex={0} aria-label="Go to homepage">
          <span className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight leading-tight group-hover:text-blue-900 transition">
            Seaside Talent
          </span>
          <span className="text-sm text-gray-500 md:ml-3 md:mb-1 leading-tight group-hover:text-blue-700 transition">Healthcare Job Board</span>
        </Link>
        {/* Desktop CTAs */}
        <div className="hidden sm:flex gap-2">
          <Link href="/jobs" className="flex items-center justify-center px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-semibold bg-white shadow hover:bg-blue-50 transition">See Open Healthcare Roles</Link>
          <Link href="/for-employers#get-started" className="flex items-center justify-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-600 transition">Start Hiring Now</Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-300 hover:bg-blue-50 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-4 pb-4 animate-fade-in-down">
          <Link href="/jobs" className="flex items-center justify-center block w-full px-5 py-3 border border-blue-600 text-blue-600 font-semibold bg-white shadow hover:bg-blue-50 transition text-center">See Open Healthcare Roles</Link>
          <Link href="/for-employers#get-started" className="flex items-center justify-center block w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-600 transition text-center">Start Hiring Now</Link>
        </div>
      )}
    </header>
  );
} 