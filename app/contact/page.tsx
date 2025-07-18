import { Metadata } from 'next'
import { Mail, Shield, FileText, HeadphonesIcon, MessageSquare, ArrowLeft, Send, Phone, MapPin } from 'lucide-react'
import PublicHeader from '@/components/public-header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - SeaSide Talent',
  description: 'Get in touch with our team for sales inquiries, security questions, compliance support, or general assistance.',
  keywords: 'contact, sales, security, compliance, support, healthcare job board',
}

const contactOptions = [
  {
    title: "Sales Inquiries",
    description: "Interested in our platform? Let's discuss how Seaside Talent can help your healthcare organization.",
    email: "sales@seasidetalent.com",
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Security & Compliance",
    description: "Questions about our HIPAA compliance, security measures, or audit readiness?",
    email: "security@seasidetalent.com",
    icon: <Shield className="h-6 w-6 text-green-600" />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    title: "Compliance Support",
    description: "Need help with credential verification, license filtering, or audit documentation?",
    email: "compliance@seasidetalent.com",
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    title: "Technical Support",
    description: "Having issues with the platform? Our support team is here to help.",
    email: "support@seasidetalent.com",
    icon: <HeadphonesIcon className="h-6 w-6 text-orange-600" />,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
]

export default function ContactPage() {
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
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're here to help with sales inquiries, security questions, compliance support, and technical assistance.
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

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right team for your inquiry. We're here to support your healthcare hiring needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className={`${option.bgColor} rounded-2xl p-8 border ${option.borderColor} hover:shadow-lg transition-shadow flex flex-col`}>
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm flex-grow">{option.description}</p>
                <div className="mt-auto">
                  <a 
                    href={`mailto:${option.email}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${option.color} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 border border-white/20`}
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Prefer to send a message? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your healthcare organization"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Type of Inquiry *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="security">Security & Compliance</option>
                  <option value="compliance">Compliance Support</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">About Seaside Talent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Boston, Massachusetts</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">(617) 555-0123</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-600 text-sm">hello@seasidetalent.com</p>
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