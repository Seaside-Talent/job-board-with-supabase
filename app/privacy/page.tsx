import { Metadata } from 'next'
import PublicHeader from '@/components/public-header'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - SeaSide Talent',
  description: 'Privacy policy for SeaSide Talent healthcare job board platform.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We are committed to protecting your privacy and being transparent about how we handle your personal information.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-colors border border-white/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, post a job, or contact us for support.</p>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure compliance with healthcare regulations.</p>
            
            <h2>Information Sharing</h2>
            <p>We do not sell your personal information. We may share information with healthcare employers for hiring purposes, with your consent.</p>
            
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information, including encryption and access controls.</p>
            
            <h2>HIPAA Compliance</h2>
            <p>As a healthcare-focused platform, we maintain HIPAA compliance standards for handling protected health information.</p>
            
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@seasidetalent.com.</p>
            
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@seasidetalent.com.</p>
          </div>
        </div>
      </section>

      {/* Soothing Footer */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600">
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
  )
} 