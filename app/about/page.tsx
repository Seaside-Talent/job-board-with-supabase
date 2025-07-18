import { Metadata } from 'next'
import PublicHeader from '@/components/public-header'
import Link from 'next/link'
import { Users, Heart, Shield, Award, ArrowLeft, Eye, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - SeaSide Talent',
  description: 'Learn about SeaSide Talent, the healthcare job board built for healthcare\'s unique compliance and credentialing needs.',
}

export default function AboutPage() {
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
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">SeaSide Talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The healthcare job board built for healthcare's unique compliance and credentialing needs.
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To revolutionize healthcare hiring by providing a platform that understands the unique challenges of healthcare recruitment, 
              from credential verification to compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare-First</h3>
              <p className="text-gray-600">
                Built specifically for healthcare's unique needs, from HIPAA compliance to credential verification.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-600">
                Automated compliance checks, audit trails, and secure document storage built into every feature.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Focused</h3>
              <p className="text-gray-600">
                Connecting healthcare organizations with qualified, credentialed professionals who are ready to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              SeaSide Talent was founded by healthcare professionals who experienced firsthand the challenges of hiring in the healthcare industry. 
              We saw that existing job boards didn't understand the unique requirements of healthcare hiring - from credential verification to 
              compliance documentation.
            </p>
            
            <p>
              Our platform was built from the ground up to address these challenges. We integrate HIPAA compliance, automated credential 
              verification, and comprehensive audit trails into every aspect of the hiring process.
            </p>
            
            <p>
              Today, we serve healthcare organizations across Massachusetts and beyond, helping them find qualified professionals while 
              maintaining the highest standards of compliance and security.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Human Dignity</h3>
              <p className="text-gray-600">
                We treat every individual with respect and dignity, recognizing the value of each healthcare professional and their contribution to patient care.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in open communication and clear processes, ensuring all stakeholders understand how our platform works and how their data is handled.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to meet the evolving needs of healthcare hiring, from AI-powered matching to automated compliance checks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We believe that healthcare organizations deserve access to the best talent. Our platform ensures that every candidate is properly credentialed and qualified.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Security</h3>
              <p className="text-gray-600">
                We understand that healthcare organizations handle sensitive information. Our platform is built with security and compliance at its core.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We view our relationship with healthcare organizations as a partnership. We're here to support your hiring needs and help you build stronger teams.
              </p>
            </div>
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