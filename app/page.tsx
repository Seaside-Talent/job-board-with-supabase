"use client";

import Link from "next/link";
import PublicHeader from "@/components/public-header";
import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const aiPrompts = [
  "Find RNs available in Greater Boston",
  "Locate CNAs for Quincy and South Shore shifts",
  "Search for Home Health Aides in Worcester",
  "Find LPNs near Springfield, MA for assisted living",
  "Find Bilingual Caregivers in Lawrence and Lowell",
  "Search for Nurse Practitioners licensed in MA",
  "Find RNs with hospice experience near Cambridge",
  "Locate Weekend CNAs in Brockton or Taunton",
  "Search for School Nurses in the Boston Public School system",
  "Find Per Diem Physical Therapists in the North Shore",
  "Find Mental Health Clinicians in Western MA",
  "Locate Vaccination RNs available near Boston",
  "Search for Travel Nurses licensed in both MA and NH",
  "Find Float Pool LPNs for Worcester County",
  "Search for Telehealth Social Workers in Massachusetts",
  "Locate ICU Nurses for contract roles in New England",
  "Find Speech-Language Pathologists in the Cape Cod region",
  "Search for part-time RNs in Boston's MetroWest area",
  "Find Nurse Educators available in Massachusetts",
  "Locate Medical Assistants near Boston with Epic experience"
];

function useTypingPrompt(prompts: string[], typingSpeed = 40, pause = 1200, dotsSpeed = 400) {
  const [promptIdx, setPromptIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
  const [dots, setDots] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phase === 'typing') {
      if (display.length < prompts[promptIdx].length) {
        timeoutRef.current = setTimeout(() => {
          setDisplay(prompts[promptIdx].slice(0, display.length + 1));
        }, typingSpeed);
      } else {
        setPhase('pause');
        setDots(1);
      }
    } else if (phase === 'pause') {
      // Animate dots
      timeoutRef.current = setTimeout(() => {
        setDots((d) => (d % 3) + 1);
      }, dotsSpeed);
      // After pause, start deleting
      const pauseTimeout = setTimeout(() => {
        setPhase('deleting');
      }, pause);
      return () => clearTimeout(pauseTimeout);
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, typingSpeed / 1.5);
      } else {
        setPhase('typing');
        setPromptIdx((i) => (i + 1) % prompts.length);
      }
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [display, phase, promptIdx, prompts, typingSpeed, pause, dotsSpeed]);

  // Reset display when prompt changes
  useEffect(() => {
    if (phase === 'typing') setDisplay("");
  }, [promptIdx, phase]);

  const dotsStr = phase === 'pause' ? '.'.repeat(dots) : '';
  return [display + dotsStr, prompts[promptIdx]] as const;
}

const maCities = [
  "Boston",
  "Worcester",
  "Springfield",
  "Lowell",
  "Cambridge",
  "Brockton",
  "Quincy",
  "Lynn",
  "New Bedford",
  "Fall River",
  "Lawrence",
  "Somerville",
  "Framingham",
  "Haverhill",
  "Waltham",
  "Malden",
  "Brookline",
  "Plymouth",
  "Medford",
  "Taunton",
  "Chicopee",
];

export default function Home() {
  // FAB prompt
  const [typedPrompt, currentPrompt] = useTypingPrompt(aiPrompts, 40, 1400, 400);
  // Social proof city cycling
  const [cityIdx, setCityIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(true);
      setDirection('up');
      setTimeout(() => {
        setCityIdx((i) => (i + 1) % maCities.length);
        setDirection('down');
        setAnimating(false);
      }, 350); // match animation duration
    }, 2200);
    return () => clearTimeout(timer);
  }, [cityIdx]);

  // Animation classes for city
  const cityAnimClass =
    animating && direction === 'up'
      ? 'animate-fab-city-up'
      : animating && direction === 'down'
      ? 'animate-fab-city-down'
      : '';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Simple Navigation */}
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center flex-1 px-4 py-12 md:py-20 w-full overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/40 to-blue-200/10 z-10" />
        <div className="relative z-20 max-w-2xl w-full mx-auto text-center py-12 px-4 md:px-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-800 leading-tight drop-shadow-sm">
            Your Trusted Source for Healthcare Talent
            <span className="block text-blue-500 font-bold text-2xl md:text-3xl mt-2">Connecting Every Role, Every Specialty.</span>
          </h1>
          <p className="text-lg md:text-xl mb-3 text-blue-900 font-medium">
            Hire faster with qualified healthcare talent, credentialed and ready for your team.
          </p>
          <p className="mb-8 text-gray-700 text-base md:text-lg">
            Seaside Talent is the only job board built for healthcare’s unique compliance and credentialing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link href="/for-employers" className="flex flex-1 items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition text-lg">Start Hiring Now</Link>
            <Link href="/jobs" className="flex flex-1 items-center justify-center px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-700 font-bold bg-white shadow-lg hover:bg-blue-50 transition text-lg">See Open Healthcare Roles Near You</Link>
          </div>
        </div>
      </section>

      {/* Trust Ribbon */}
      <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-center py-3 text-base font-semibold shadow-inner flex flex-wrap justify-center gap-2">
        <Link href="/compliance" className="inline-block mx-2 hover:text-blue-900 transition font-semibold">🔒 HIPAA Compliant</Link>
        <Link href="/licenses" className="inline-block mx-2 hover:text-blue-900 transition font-semibold">✅ License Filtering</Link>
        <Link href="/audit-ready" className="inline-block mx-2 hover:text-blue-900 transition font-semibold">🧾 Audit Ready</Link>
        <Link href="/built-for-healthcare" className="inline-block mx-2 hover:text-blue-900 transition font-semibold">🧠 Built for Healthcare</Link>
      </div>

      {/* Social Proof & Why Seaside */}
      <section className="max-w-5xl mx-auto py-12 px-4 md:px-0 w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <div className="text-gray-700 text-base md:text-lg font-medium">
            <span className="font-bold text-blue-700">3,142</span> credentialed profiles active · <span className="font-bold text-blue-700">54</span> new jobs this week · <span className="font-bold text-blue-700">5</span> hires yesterday
          </div>
          <div className="text-blue-700 font-semibold text-base md:text-lg">
            12 employers hiring near you in
            <span
              className={`ml-2 font-mono font-extrabold text-blue-700 text-lg inline-block ${cityAnimClass}`}
              style={{ minWidth: 80 }}
            >
              {maCities[cityIdx]}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">🧠</div>
            <div className="font-bold text-lg mb-1">Credential-Aware Matching</div>
            <div className="text-gray-600 text-sm">We match by license, specialty, and compliance.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">🔄</div>
            <div className="font-bold text-lg mb-1">Seamless Compliance</div>
            <div className="text-gray-600 text-sm">Built-in credential and audit tools.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">📊</div>
            <div className="font-bold text-lg mb-1">License & Shift Filters</div>
            <div className="text-gray-600 text-sm">Find the right fit, every time.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600 mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Seaside Talent. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms</Link>
          <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
        </div>
      </footer>

      {/* Floating Action Button: Chat-style launcher with Sparkles icon only */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <button
          className="flex items-center justify-center w-16 h-16 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 focus:outline-none border-4 border-white animate-fade-in-down"
          aria-label="Open AI Chat"
        >
          <Sparkles className="h-8 w-8 text-white" />
        </button>
        <div className="mt-2 text-xs text-gray-700 font-medium pr-2 sm:pr-2 opacity-80 select-none text-center sm:text-right max-w-full sm:max-w-xs">
          Try our AI-powered search prompts!
        </div>
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fab-city-up {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-32px); }
        }
        @keyframes fab-city-down {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fab-city-up {
          animation: fab-city-up 0.35s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .animate-fab-city-down {
          animation: fab-city-down 0.35s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </div>
  );
}
