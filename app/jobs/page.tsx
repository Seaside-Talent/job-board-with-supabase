"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PublicHeader from '@/components/public-header';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Star, 
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Briefcase,
  Users,
  Shield,
  Zap,
  ChevronDown,
  X,
  Bookmark,
  Share2,
  MessageCircle
} from 'lucide-react';

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Registered Nurse - ICU",
    company: "Massachusetts General Hospital",
    location: "Boston, MA",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "2 hours ago",
    description: "Join our critical care team in a state-of-the-art ICU. We're looking for experienced RNs who are passionate about patient care and thrive in fast-paced environments.",
    requirements: ["BSN required", "2+ years ICU experience", "BLS/ACLS certified", "Massachusetts RN license"],
    benefits: ["Health insurance", "401k matching", "Professional development", "Tuition reimbursement"],
    rating: 4.8,
    applicants: 12,
    urgent: true,
    aiMatch: 95
  },
  {
    id: 2,
    title: "Physical Therapist",
    company: "Beth Israel Deaconess Medical Center",
    location: "Boston, MA",
    salary: "$80,000 - $100,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Join our rehabilitation team and help patients recover from injuries and surgeries. Work with cutting-edge equipment in a supportive environment.",
    requirements: ["DPT degree", "Massachusetts PT license", "1+ years experience", "Strong communication skills"],
    benefits: ["Competitive salary", "Health benefits", "Continuing education", "Flexible schedule"],
    rating: 4.6,
    applicants: 8,
    urgent: false,
    aiMatch: 88
  },
  {
    id: 3,
    title: "Medical Assistant",
    company: "Brigham and Women's Hospital",
    location: "Boston, MA",
    salary: "$45,000 - $55,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Support our medical team in providing exceptional patient care. Perfect opportunity for someone looking to grow in healthcare.",
    requirements: ["Certified Medical Assistant", "1+ years experience", "Excellent patient interaction skills", "Detail-oriented"],
    benefits: ["Health insurance", "Paid time off", "Professional growth", "Team environment"],
    rating: 4.4,
    applicants: 15,
    urgent: false,
    aiMatch: 92
  },
  {
    id: 4,
    title: "Respiratory Therapist",
    company: "Tufts Medical Center",
    location: "Boston, MA",
    salary: "$70,000 - $85,000",
    type: "Full-time",
    posted: "1 week ago",
    description: "Join our respiratory care team and make a difference in patients' lives. Work with advanced equipment and a collaborative team.",
    requirements: ["Associate's degree in Respiratory Therapy", "Massachusetts RT license", "BLS/ACLS certified", "Team player"],
    benefits: ["Competitive benefits", "Professional development", "Work-life balance", "Career advancement"],
    rating: 4.7,
    applicants: 6,
    urgent: true,
    aiMatch: 89
  },
  {
    id: 5,
    title: "Pharmacist",
    company: "Boston Medical Center",
    location: "Boston, MA",
    salary: "$120,000 - $140,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Lead our pharmacy team in providing safe and effective medication therapy. Work in a collaborative environment with cutting-edge technology.",
    requirements: ["PharmD degree", "Massachusetts pharmacist license", "2+ years hospital experience", "Strong clinical skills"],
    benefits: ["Excellent salary", "Comprehensive benefits", "Professional growth", "Research opportunities"],
    rating: 4.9,
    applicants: 4,
    urgent: false,
    aiMatch: 96
  }
];

const filters = {
  jobType: ["All", "Full-time", "Part-time", "Per-diem", "Contract", "Travel"],
  experience: ["All", "Entry Level", "Mid Level", "Senior", "Management"],
  salary: ["All", "$30k-$50k", "$50k-$70k", "$70k-$90k", "$90k+"],
  location: ["All", "Boston", "Cambridge", "Worcester", "Springfield", "Remote"]
};

export default function JobsPage() {
  const [jobs, setJobs] = useState(mockJobs);
  const [selectedJob, setSelectedJob] = useState<any>(mockJobs[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastJobRef = useRef<HTMLDivElement | null>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Infinite scroll setup
  useEffect(() => {
    if (loading) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreJobs();
      }
    });

    if (lastJobRef.current) {
      observerRef.current.observe(lastJobRef.current);
    }
  }, [jobs, loading, hasMore]);

  const loadMoreJobs = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newJobs = [...mockJobs, ...mockJobs.map(job => ({ ...job, id: job.id + jobs.length }))];
      setJobs(newJobs);
      setLoading(false);
      if (newJobs.length > 50) setHasMore(false);
    }, 1000);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulate AI-powered search
    const filtered = mockJobs.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
    );
    setJobs(filtered);
  };

  const nextJob = () => {
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
      setSelectedJob(jobs[currentJobIndex + 1]);
    }
  };

  const prevJob = () => {
    if (currentJobIndex > 0) {
      setCurrentJobIndex(currentJobIndex - 1);
      setSelectedJob(jobs[currentJobIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your <span className="text-yellow-300">Dream Job</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              AI-powered job matching connects you with the best healthcare opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="bg-white shadow px-8 py-4">
        <section className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* AI Search */}
            <div className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search jobs with AI assistance..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  {/* Filters button for mobile */}
                  <button
                    className="md:hidden ml-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => setShowFilters(true)}
                    aria-label="Show Filters"
                  >
                    <Filter className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span className="sm:inline">Filters</span>
            </button>
          </div>
          {/* Filters Panel - Desktop */}
          {!isMobile && showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(filters).map(([key, options]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Filters Modal - Mobile */}
          {isMobile && showFilters && (
            <div className="fixed inset-0 z-50 flex items-end justify-center">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)}></div>
              <div className="relative w-full bg-white rounded-t-2xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">Filters</span>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 text-2xl leading-none">&times;</button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(filters).map(([key, options]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        {options.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowFilters(false)} className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-bold">Apply Filters</button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  ref={index === jobs.length - 1 ? lastJobRef : null}
                  onClick={() => {
                    setSelectedJob(job);
                    setCurrentJobIndex(index);
                  }}
                  className={`bg-white rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedJob.id === job.id ? 'border-blue-500 shadow-lg' : 'border-gray-100'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{job.applicants} applicants</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold">{job.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          <Zap className="h-3 w-3" />
                          {job.aiMatch}% match
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Loading more jobs...</p>
                </div>
              )}
            </div>
          </div>

          {/* Job Details Panel */}
          <div className="lg:col-span-2">
            {isMobile ? (
              // Mobile Job Card View
              <div className="fixed inset-0 bg-white z-40 transform transition-transform duration-300">
                {selectedJob && (
                  <div className="flex flex-col h-full">
                    {/* Mobile Header with Same Nav */}
                    <div className="bg-white border-b border-gray-200">
                      {/* Same Navigation Header */}
                      <PublicHeader />
                      
                      {/* Search Bar */}
                      <div className="px-4 pb-4 mt-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <input
                            type="text"
                            placeholder="Search jobs..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Job Content */}
                    <div className="flex-1 overflow-y-auto">
                      <JobCard job={selectedJob} showApplyButton={false} isMobile={true} />
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="border-t bg-white p-4 space-y-4">
                      {/* Apply Button */}
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <MessageCircle className="h-5 w-5 inline mr-2" />
                        Apply Now
                      </button>
                      
                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={prevJob}
                          disabled={currentJobIndex === 0}
                          className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Previous
                        </button>
                        <span className="text-sm text-gray-500">
                          {currentJobIndex + 1} of {jobs.length}
                        </span>
                        <button
                          onClick={nextJob}
                          disabled={currentJobIndex === jobs.length - 1}
                          className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Desktop Job Details
              <div className="sticky top-32 h-[calc(100vh-10rem)] overflow-y-auto">
                {selectedJob ? (
                  <JobCard job={selectedJob} />
                ) : (
                  <div className="bg-white shadow-sm border border-gray-200 p-8 text-center h-full flex items-center justify-center">
                    <div>
                      <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Job</h3>
                      <p className="text-gray-600">Choose a job from the list to view details</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Soothing Footer */}
      <footer className="w-full bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 py-10 text-center text-xs text-gray-600 mt-20">
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
  );
}

// Job Card Component
function JobCard({ job, showApplyButton = true, isMobile = false }: { job: any; showApplyButton?: boolean; isMobile?: boolean }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className={`bg-white shadow-lg border border-gray-200 overflow-hidden ${!isMobile ? 'rounded-xl' : ''}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
              {job.urgent && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                  Urgent
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span className="font-semibold">{job.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{job.applicants} applicants</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">{job.rating}</span>
            </div>
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              <Zap className="h-3 w-3" />
              {job.aiMatch}% match
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{isLiked ? 'Liked' : 'Like'}</span>
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            <Share2 className="h-4 w-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
          <ul className="space-y-2">
            {job.requirements.map((req: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
          <ul className="space-y-2">
            {job.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Posted Info */}
        <div className="text-sm text-gray-500">
          Posted {job.posted}
        </div>
      </div>

      {/* Apply Button */}
      {showApplyButton && (
        <div className="p-6 border-t border-gray-100">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <MessageCircle className="h-5 w-5 inline mr-2" />
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
} 