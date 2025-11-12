"use client"

import type React from "react"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  Search,
  BookOpen,
  Video,
  FileText,
  Send,
  Clock,
  User,
} from "lucide-react"
import { toast } from "sonner"
import { feedbackAPI } from "../services/api"

export default function HelpAndSupport() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [problemType, setProblemType] = useState("")
  const [loading, setLoading] = useState(false)

  const faqs = [
    {
      question: "How do I track a bus in real-time?",
      answer:
        'Navigate to the Live Tracking page from the main menu, select your bus route, and you\'ll see the real-time location of all active buses on that route. You can also click "Track" on any bus card in Search Results.',
    },
    {
      question: "Can I save my favorite routes?",
      answer:
        "Yes! Click the heart icon on any bus card to add it to your favorites. Access all your saved routes quickly from the Favorites page in the navigation menu.",
    },
    {
      question: "How accurate are the arrival times?",
      answer:
        "Our arrival times are updated in real-time using GPS tracking. They're accurate to within 1-2 minutes under normal conditions. Traffic and weather may cause slight variations.",
    },
    {
      question: "What do the different bus types mean?",
      answer:
        "We have three types: Regular buses (standard service), AC buses (air-conditioned express service), and Green buses (eco-friendly electric buses). Filter by type to find your preferred service.",
    },
    {
      question: "How do I get notifications for bus delays?",
      answer:
        "Go to Settings > Notifications and enable push notifications and bus updates. You'll receive instant alerts for any delays, cancellations, or route changes on your favorite routes.",
    },
    {
      question: "Is my location data secure?",
      answer:
        "Absolutely. We use industry-standard encryption and never share your location data with third parties. You can control location permissions in Settings > Privacy & Security.",
    },
  ]

  const quickLinks = [
    {
      title: "Getting Started",
      description: "Learn the basics of using RouteMate",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Documentation",
      description: "Detailed guides and references",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      action: "Start Chat",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Call Us",
      description: "+1 (800) 123-4567",
      icon: Phone,
      action: "Call Now",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      title: "Email Support",
      description: "support@routemate.com",
      icon: Mail,
      action: "Send Email",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!name || !email || !problemType || !message) {
        toast.error("Please fill in all fields")
        setLoading(false)
        return
      }

      await feedbackAPI.submitFeedback({ email, message })

      toast.success("Message sent! We'll respond within 24 hours.")
      setName("")
      setEmail("")
      setProblemType("")
      setMessage("")
    } catch (error: any) {
      toast.error(error.message || "Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      if (filtered.length > 0) {
        const firstMatchIndex = faqs.findIndex(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setExpandedFaq(firstMatchIndex)
        toast.success(`Found ${filtered.length} result${filtered.length > 1 ? "s" : ""}`)
        document.getElementById("faqs-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        toast.error("No results found. Try different keywords.")
      }
    }
  }

  const problemTypes = [
    "Technical Issue",
    "Account Problem",
    "Bus Tracking Issue",
    "Payment & Billing",
    "Route Information",
    "App Performance",
    "Feature Request",
    "Other",
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        {/* ... existing header and search ... */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-2xl">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-3">Help & Support Center</h1>
          <p className="text-[18px] text-[#6a7282] max-w-2xl mx-auto">
            We're here to help! Find answers, get support, or reach out to our team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#9ca3af]" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-32 py-5 bg-white border-2 border-purple-200 rounded-2xl text-[16px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:ring-4 focus:ring-purple-100 shadow-lg transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold text-[14px]"
            >
              Search
            </button>
          </form>
        </div>

        {/* ... existing quick links ... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <button
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group text-left"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-[#2c084e] mb-2">{link.title}</h3>
                <p className="text-[15px] text-[#6a7282]">{link.description}</p>
              </button>
            )
          })}
        </div>

        {/* FAQs */}
        <div id="faqs-section" className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-[28px] font-bold text-[#2c084e] mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#6412b4]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-purple-50 transition-colors"
                >
                  <span className="text-[16px] font-semibold text-[#2c084e] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6412b4] transition-transform flex-shrink-0 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 pt-2">
                    <p className="text-[15px] text-[#6a7282] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ... existing contact methods ... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className={`${method.color} rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition-transform`}
              >
                <Icon className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-[22px] font-bold mb-2">{method.title}</h3>
                <p className="text-[15px] opacity-90 mb-6">{method.description}</p>
                <button className="bg-white text-[#2c084e] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  {method.action}
                </button>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-[28px] font-bold text-[#2c084e] mb-6 flex items-center gap-3">
            <Send className="w-8 h-8 text-[#6412b4]" />
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Problem Type</label>
              <div className="relative">
                <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                <select
                  value={problemType}
                  onChange={(e) => setProblemType(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select problem type</option>
                  {problemTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Message</label>
              <textarea
                placeholder="Describe your issue or question in detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 transition-all font-semibold flex items-center justify-center gap-2 text-[16px] disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t-2 border-gray-100">
            <div className="flex items-start gap-3 bg-blue-50 rounded-2xl p-5">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[16px] font-bold text-blue-900 mb-1">Response Time</h4>
                <p className="text-[14px] text-blue-800">
                  We typically respond within 24 hours during business days (Monday-Friday, 9 AM - 6 PM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
