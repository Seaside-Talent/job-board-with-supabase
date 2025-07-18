"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, FileText, Briefcase, User, Search, Sparkles, X } from "lucide-react";
import PublicHeader from '@/components/public-header';
import { useState, useEffect } from "react";

const navItems = [
  { href: "/dashboard/company", label: "Overview", icon: <Building2 className="h-5 w-5" /> },
  { href: "/dashboard/company/roles", label: "Roles", icon: <FileText className="h-5 w-5" /> },
  { href: "/dashboard/company/job-postings", label: "Job Postings", icon: <Briefcase className="h-5 w-5" /> },
  { href: "/dashboard/company/admin", label: "Admin", icon: <User className="h-5 w-5" /> },
];

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setAiModalOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      {/* Top Nav */}
      <nav className="w-full bg-white shadow flex items-center px-4 py-3 gap-4 sticky top-0 z-30">
        <Link href="/dashboard/company" className="flex items-center gap-2 font-bold text-blue-800 text-lg">
          <Building2 className="h-6 w-6" /> Acme Health
        </Link>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Ask AI about your company, roles, jobs..."
              className="w-full pl-10 pr-16 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white shadow-sm"
              onFocus={() => setAiModalOpen(true)}
            />
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-blue-700 transition" onClick={() => setAiModalOpen(true)}>
              <Sparkles className="h-4 w-4" /> Ask AI <span className="ml-1 text-xs text-gray-200">(Cmd+I)</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Profile/avatar menu placeholder */}
          <div className="w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-800">A</div>
        </div>
      </nav>
      {/* Ask AI Modal */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative flex flex-col gap-4">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setAiModalOpen(false)}><X className="h-6 w-6" /></button>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-blue-600" /> Ask AI</h2>
            <input
              type="text"
              value={aiQuery}
              onChange={e => setAiQuery(e.target.value)}
              placeholder="Type your question about your company, roles, jobs..."
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              autoFocus
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 mt-2">Ask</button>
            <div className="text-xs text-gray-500 mt-2">Shortcut: <kbd className="px-2 py-1 bg-gray-100 rounded border">Cmd+I</kbd> or <kbd className="px-2 py-1 bg-gray-100 rounded border">Ctrl+I</kbd></div>
          </div>
        </div>
      )}
      <div className="flex flex-1 w-full">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex flex-col w-56 bg-white border-r shadow-lg py-6 px-2 gap-2">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors ${pathname === item.href ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-blue-50"}`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </aside>
        {/* Main content */}
        <main className="flex-1 p-4 md:p-10 w-full max-w-6xl mx-auto">{children}</main>
      </div>
      {/* Bottom nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t flex justify-around items-center py-2 shadow-lg">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg font-semibold text-xs ${pathname === item.href ? "text-blue-700" : "text-gray-500"}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
} 