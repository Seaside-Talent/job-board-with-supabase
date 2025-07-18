import { Metadata } from 'next'
import { Shield, FileText, Eye, Clock, CheckCircle, Lock, Database, Activity, Users, AlertTriangle } from 'lucide-react'
import PublicHeader from '@/components/public-header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Audit Ready - SeaSide Talent',
  description: 'Stay audit-ready with automated compliance checks, secure document storage, and comprehensive audit trails. Everything in one place for the day of audit.',
  keywords: 'audit ready, compliance checks, document storage, audit trail, healthcare compliance, HIPAA audit',
}

export default function AuditReadyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              Always <span className="text-yellow-300">Audit Ready</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Automated compliance checks, secure document storage, and comprehensive audit trails. 
              Everything in one place for the day of audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/onboarding/company" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors block text-center">
                Start Free Trial
              </Link>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Audit Preparedness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automated checks to secure document storage, we ensure you're always prepared for any audit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automated Compliance Checks */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Compliance Checks</h3>
              <p className="text-gray-600 mb-4">
                Continuous monitoring of licenses, certifications, and background checks with automated alerts for expiring credentials.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time license verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated expiration alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Background check monitoring
                </li>
              </ul>
            </div>

            {/* Secure Document Storage */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Document Storage</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant document storage with encryption, access controls, and version tracking for all audit materials.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  Role-based access controls
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  Document version history
                </li>
              </ul>
            </div>

            {/* Complete Audit Trail */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Audit Trail</h3>
              <p className="text-gray-600 mb-4">
                Track every action, document access, and compliance check with detailed timestamps and user identification.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  User activity logging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  Document access tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  Compliance check history
                </li>
              </ul>
            </div>

            {/* One Place for Everything */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Everything in One Place</h3>
              <p className="text-gray-600 mb-4">
                Centralized platform for all compliance data, documents, and audit materials with instant search and retrieval.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Centralized compliance hub
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Instant document search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Automated reporting
                </li>
              </ul>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Live dashboard showing compliance status, pending items, and audit readiness with instant alerts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Live compliance dashboard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Instant alert notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Risk assessment scoring
                </li>
              </ul>
            </div>

            {/* Audit Day Preparation */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-200">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audit Day Preparation</h3>
              <p className="text-gray-600 mb-4">
                Pre-built audit reports, compliance summaries, and instant access to all required documentation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Pre-built audit reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Compliance summaries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Instant document access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Audit Readiness Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform ensures you're always prepared for any audit with automated processes and comprehensive tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Automated systems continuously monitor licenses, certifications, and compliance requirements, alerting you to any issues before they become problems.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Storage</h3>
              <p className="text-gray-600">
                All documents and compliance data are stored securely with encryption, access controls, and complete audit trails of who accessed what and when.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Access</h3>
              <p className="text-gray-600">
                When audit day arrives, everything is organized and accessible. Generate reports instantly and provide auditors with complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Being Audit Ready
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of compliance requirements and eliminate audit stress with our comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-sm text-gray-600">
                Automated processes save hours of manual compliance checking and document preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reduce Risk</h3>
              <p className="text-sm text-gray-600">
                Proactive monitoring prevents compliance violations and reduces audit findings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Build Trust</h3>
              <p className="text-sm text-gray-600">
                Demonstrate compliance excellence to regulators, clients, and stakeholders.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay Compliant</h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring ensures you never miss a compliance deadline or requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Audit Ready?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join healthcare organizations that trust us to keep them audit-ready 365 days a year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding/company" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors block text-center">
              Start Free Trial
            </Link>
            <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 