"use client";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { useState } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full bg-white/80 shadow-lg sticky top-0 z-40 backdrop-blur-md border-b border-b-foreground/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
            <Link href="/" className="flex flex-col md:flex-row md:items-end gap-1 group cursor-pointer" tabIndex={0} aria-label="Go to homepage">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight leading-tight group-hover:text-blue-900 transition">
                Seaside Talent
              </span>
              <span className="text-sm text-gray-500 md:ml-3 md:mb-1 leading-tight group-hover:text-blue-700 transition">Healthcare Job Board</span>
            </Link>
            {/* Desktop AuthButton */}
            <div className="hidden sm:flex items-center gap-4">
              <AuthButton />
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
              <AuthButton />
            </div>
          )}
        </nav>
        <div className="flex-1 flex flex-col gap-20 w-full">
          {children}
        </div>
      </div>
    </main>
  );
}
