import { Metadata } from 'next'
import { Heart, Shield, Users, FileText, CheckCircle, Lock, Database, Activity, AlertTriangle, Stethoscope, Hospital, UserCheck, Award } from 'lucide-react'
import PublicHeader from '@/components/public-header'

export const metadata: Metadata = {
  title: 'Built for Healthcare - SeaSide Talent',
  description: 'Healthcare-specific features including CORI background checks, NCQA compliance, and industry-standard credentialing for healthcare organizations.',
  keywords: 'healthcare job board, CORI background checks, NCQA compliance, healthcare credentialing, healthcare hiring',
}

export default function BuiltForHealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Built</span> for Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              From CORI background checks to NCQA compliance, we understand healthcare's unique requirements. 
              Built by healthcare professionals, for healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/onboarding/company" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-3 rounded-lg transition-colors block text-center">
                Start Free Trial
              </a>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare-Specific Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with healthcare's unique compliance and credentialing requirements in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CORI Background Checks */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CORI Background Checks</h3>
              <p className="text-gray-600 mb-4">
                Massachusetts Criminal Offender Record Information (CORI) checks integrated directly into the platform.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Automated CORI processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Real-time status updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                  Secure document storage
                </li>
              </ul>
            </div>

            {/* NCQA Compliance */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NCQA Compliance</h3>
              <p className="text-gray-600 mb-4">
                National Committee for Quality Assurance (NCQA) standards built into every credentialing process.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  NCQA credentialing standards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  Automated compliance tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  Quality assurance reporting
                </li>
              </ul>
            </div>

            {/* SORI Background Checks */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SORI Background Checks</h3>
              <p className="text-gray-600 mb-4">
                Sex Offender Registry Information (SORI) checks for healthcare workers in Massachusetts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  Automated SORI verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  Continuous monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  Instant alerts for changes
                </li>
              </ul>
            </div>

            {/* SAM & OIG Checks */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SAM & OIG Checks</h3>
              <p className="text-gray-600 mb-4">
                System for Award Management (SAM) and Office of Inspector General (OIG) exclusion list monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Automated exclusion monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Real-time database checks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  Compliance reporting
                </li>
              </ul>
            </div>

            {/* Healthcare License Verification */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare License Verification</h3>
              <p className="text-gray-600 mb-4">
                Real-time verification of healthcare licenses across all 50 states and territories.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multi-state license verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automatic renewal tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Specialty certification tracking
                </li>
              </ul>
            </div>

            {/* HIPAA Compliance */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-200">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HIPAA Compliance</h3>
              <p className="text-gray-600 mb-4">
                Built-in HIPAA compliance with secure data handling, encryption, and privacy controls.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Access controls and audit logs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                  Privacy rule compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Industry Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Industry Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet and exceed the highest standards in healthcare credentialing and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hospital className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Joint Commission</h3>
              <p className="text-gray-600">
                Standards aligned with The Joint Commission's credentialing and privileging requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NCQA</h3>
              <p className="text-gray-600">
                National Committee for Quality Assurance standards for credentialing and quality management.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CMS</h3>
              <p className="text-gray-600">
                Centers for Medicare & Medicaid Services compliance for healthcare organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HIPAA</h3>
              <p className="text-gray-600">
                Health Insurance Portability and Accountability Act compliance for data security and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Built for Healthcare */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Built for Healthcare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare has unique challenges that require specialized solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Professionals Built It</h3>
                  <p className="text-gray-600">
                    Our team includes former healthcare administrators, nurses, and compliance officers who understand the industry's unique needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare-Specific Compliance</h3>
                  <p className="text-gray-600">
                    Built-in features for CORI, SORI, SAM, OIG, and healthcare license verification that other job boards don't offer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous monitoring of credentials, licenses, and background checks with instant alerts for any issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
                  <p className="text-gray-600">
                    HIPAA-compliant platform with enterprise-grade security, encryption, and access controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit Ready</h3>
                  <p className="text-gray-600">
                    Complete audit trails, document storage, and reporting capabilities for regulatory compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Safety Focus</h3>
                  <p className="text-gray-600">
                    Every feature is designed with patient safety in mind, ensuring only qualified professionals are matched.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Healthcare-Specific Hiring?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join healthcare organizations that trust our platform for their unique compliance and credentialing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-3 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 