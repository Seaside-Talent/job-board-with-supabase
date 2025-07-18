"use client";

import Link from "next/link";
import PublicHeader from "@/components/public-header";
import { 
  Users, 
  ShieldCheck, 
  FileText, 
  Brain, 
  ClipboardList, 
  CheckCircle, 
  Mail, 
  Building, 
  ArrowRight,
  Clock,
  Zap,
  Target,
  Award,
  TrendingUp,
  Star,
  Phone,
  MessageSquare,
  Calendar,
  DollarSign,
  Lock
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Create Your Company Profile",
    description: "Set up your organization with basic info, specialties, and compliance requirements",
    icon: <Building className="w-8 h-8 text-blue-600" />,
    details: [
      "Add company details and specialties",
      "Set compliance requirements",
      "Configure credential preferences",
      "Upload company branding"
    ],
    time: "5 minutes"
  },
  {
    step: "02",
    title: "Post Your First Job",
    description: "Use our AI-powered job builder to create compelling, compliant job postings",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    details: [
      "AI-enhanced job descriptions",
      "Automatic compliance checks",
      "Smart salary recommendations",
      "One-click posting to multiple boards"
    ],
    time: "3 minutes"
  },
  {
    step: "03",
    title: "Review & Connect",
    description: "Review pre-credentialed candidates and connect with the best matches",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    details: [
      "Pre-screened candidate pool",
      "AI-powered matching",
      "Direct messaging system",
      "Interview scheduling tools"
    ],
    time: "24 hours"
  },
  {
    step: "04",
    title: "Hire & Onboard",
    description: "Complete background checks, verify credentials, and onboard new hires",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    details: [
      "Automated background checks",
      "Credential verification",
      "Document management",
      "Compliance reporting"
    ],
    time: "2-3 days"
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-green-600" />,
    title: "2x Faster Hiring",
    description: "Fill positions in half the time with pre-credentialed candidates"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Built-in Compliance",
    description: "HIPAA-compliant with automated license verification and audit trails"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-purple-600" />,
    title: "Cost Effective",
    description: "Pay only for what you use - no long-term contracts or hidden fees"
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-600" />,
    title: "AI-Powered Matching",
    description: "Smart algorithms surface the best-fit candidates for your roles"
  },
  {
    icon: <Award className="w-6 h-6 text-indigo-600" />,
    title: "Quality Candidates",
    description: "Access to verified healthcare professionals with complete credentials"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
    title: "Scalable Solution",
    description: "Grow from 1 to 1000+ hires with the same powerful platform"
  }
];

const testimonials = [
  {
    quote: "Seaside Talent transformed our hiring process. We filled critical nursing positions 3x faster while maintaining our high standards.",
    author: "Sarah Johnson",
    role: "Director of Nursing",
    company: "Boston Medical Center",
    rating: 5
  },
  {
    quote: "The compliance features are game-changing. We're audit-ready year-round and our credentialing process is now automated.",
    author: "Michael Chen",
    role: "HR Director",
    company: "Healthcare Partners",
    rating: 5
  },
  {
    quote: "The AI matching is incredible. We're connecting with candidates who are actually qualified and interested in our roles.",
    author: "Dr. Emily Rodriguez",
    role: "Medical Director",
    company: "Community Health Clinic",
    rating: 5
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small healthcare organizations",
    features: [
      "Up to 5 job postings",
      "Basic candidate matching",
      "Email support",
      "Standard compliance tools"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$99/month",
    description: "Ideal for growing healthcare teams",
    features: [
      "Unlimited job postings",
      "Advanced AI matching",
      "Priority support",
      "Full compliance suite",
      "Background check integration",
      "Analytics dashboard"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large healthcare systems",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced reporting",
      "API access"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    q: "How quickly can I start posting jobs?",
    a: "You can create your first job posting within 10 minutes of signing up. Our streamlined onboarding process gets you up and running immediately."
  },
  {
    q: "What credentials do you verify?",
    a: "We verify all major healthcare credentials including licenses, certifications, immunizations, background checks (CORI, SORI, SAM, OIG), and more."
  },
  {
    q: "Is there a long-term contract required?",
    a: "No. Seaside Talent operates on a month-to-month basis. You can cancel anytime with no penalties or hidden fees."
  },
  {
    q: "How does the AI matching work?",
    a: "Our AI analyzes job requirements, candidate skills, experience, and preferences to surface the best matches. It learns from your hiring patterns to improve over time."
  },
  {
    q: "What compliance features are included?",
    a: "We provide HIPAA-compliant data handling, automated license verification, audit trails, secure document storage, and compliance reporting."
  },
  {
    q: "Can I integrate with my existing HR systems?",
    a: "Yes. We offer integrations with major HR platforms and can build custom integrations for enterprise clients."
  }
];

export default function ForEmployersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    employees: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could redirect to sign-up with pre-filled data
    window.location.href = `/sign-up?company=${encodeURIComponent(formData.companyName)}&email=${encodeURIComponent(formData.email)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      <PublicHeader />
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-20 px-4 text-center text-white shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-8 h-8 text-yellow-300" />
            <span className="text-yellow-300 font-semibold">Trusted by 500+ Healthcare Organizations</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hire Healthcare Talent
            <span className="block text-blue-200">Faster & Smarter</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            The all-in-one platform for healthcare employers: post jobs, verify credentials, and hire with confidence—compliance built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/onboarding/company" className="px-8 py-4 rounded-lg bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 transition text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Start Free Trial
            </Link>
            <Link href="#demo" className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-blue-700 transition text-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Book Demo
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Setup in minutes
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Healthcare Organizations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Successful Hires</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2x</div>
              <div className="text-gray-600">Faster Hiring</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from job posting to hired candidate in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 text-blue-700 font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center">
                      {step.step}
                    </div>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mt-auto">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Organizations Choose Seaside
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for healthcare hiring challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See what healthcare organizations are saying about Seaside Talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-blue-200">{testimonial.role}</div>
                  <div className="text-blue-200">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your hiring needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.cta === "Contact Sales" ? "/contact" : "/sign-up"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-bold transition ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Seaside Talent
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations that trust Seaside Talent for faster, compliant hiring.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              <div className="text-center">
                <a
                  href="/onboarding/company"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Start Free Trial
                </a>
              </div>
              <p className="text-center text-blue-100 text-sm">
                Free 14-day trial • No credit card required • Cancel anytime
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600 mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Seaside Talent. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms</Link>
          <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
        </div>
        <div className="mt-2">As Featured In: <span className="font-semibold text-gray-700">Healthcare Weekly, MedTech News</span></div>
      </footer>

      {/* Fixed Bottom CTA Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link 
          href="/contact" 
          className="flex items-center gap-3 px-6 py-4 rounded-full shadow-xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 transform hover:scale-105"
        >
          <MessageSquare className="h-5 w-5 md:mr-0" />
          <span className="hidden md:inline">Talk to Sales</span>
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Link 
          href="/onboarding/company" 
          className="flex items-center gap-3 px-6 py-4 rounded-full shadow-xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transform hover:scale-105"
        >
          <CheckCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Start Free Trial</span>
          <span className="sm:hidden">Start Free</span>
        </Link>
      </div>
    </div>
  );
} 