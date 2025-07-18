import { Metadata } from 'next'
import PublicHeader from '@/components/public-header'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - SeaSide Talent',
  description: 'Terms of service for SeaSide Talent healthcare job board platform.',
}

export default function TermsPage() {
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
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-yellow-300">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our terms of service outline the rules and guidelines for using SeaSide Talent's healthcare job board platform.
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

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>By using SeaSide Talent's services, you agree to these Terms of Service and our Privacy Policy.</p>
            
            <h2>Service Description</h2>
            <p>SeaSide Talent provides a healthcare job board platform connecting healthcare professionals with employers. We offer credential verification, compliance tools, and hiring services.</p>
            
            <h2>User Responsibilities</h2>
            <p>Users must provide accurate information, maintain account security, and comply with applicable healthcare regulations and laws.</p>
            
            <h2>Prohibited Activities</h2>
            <p>Users may not misuse our services, violate any laws, or attempt to access unauthorized areas of our platform.</p>
            
            <h2>Intellectual Property</h2>
            <p>All content and technology on our platform is owned by SeaSide Talent or licensed to us. Users retain rights to their own content.</p>
            
            <h2>Limitation of Liability</h2>
            <p>SeaSide Talent is not liable for indirect, incidental, or consequential damages arising from use of our services.</p>
            
            <h2>Termination</h2>
            <p>We may terminate or suspend access to our services for violations of these terms or for any other reason at our discretion.</p>
            
            <h2>Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of our services constitutes acceptance of updated terms.</p>
            
            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, contact us at legal@seasidetalent.com.</p>
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