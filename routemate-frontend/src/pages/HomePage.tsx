"use client"

import { useState, useContext, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  Search,
  MapPin,
  Navigation,
  Clock,
  Heart,
  Users,
  Filter,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  TrendingUp,
} from "lucide-react"
import { AppContext } from "../App"
import { toast } from "sonner"
import imgHero from "../assets/bus.png"
import svgPaths from "../imports/svg-wjwxf1kg3t"

export default function HomePage() {
  const navigate = useNavigate()
  const context = useContext(AppContext)
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [sortBy, setSortBy] = useState("time")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const sortDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    if (!context?.user && !context?.isGuest) {
      context?.setShowAuthModal(true)
      context?.setAuthMode("signin")
      return
    }
    if (from && to) {
      navigate(`/search?from=${from}&to=${to}&sort=${sortBy}`)
    } else {
      toast.error("Please enter both pickup and destination")
    }
  }

  const sortOptions = [
    { id: "time", label: "Sort by Time", icon: Clock },
    { id: "distance", label: "Sort by Distance", icon: MapPin },
    { id: "stops", label: "Sort by Stops", icon: TrendingUp },
  ]

  const handleFeatureClick = (path: string) => {
    if (!context?.user && !context?.isGuest) {
      context?.setShowAuthModal(true)
      context?.setAuthMode("signin")
      toast.error("Please sign in to access this feature")
      return
    }

    // Check if trying to access admin panel without admin rights
    if (path === "/admin" && !context?.user?.isAdmin) {
      toast.error("Admin access required")
      return
    }

    navigate(path)
  }

  const allFeatures = [
    {
      title: "Timetables",
      description: "View all schedules",
      icon: Clock,
      gradient: "from-[#6412b4] to-[#2c084e]",
      path: "/timetables",
    },
    {
      title: "Live Tracking",
      description: "Track buses live",
      icon: Navigation,
      gradient: "from-[#6412b4] to-[#2c084e]",
      path: "/live-tracking",
    },
    {
      title: "My Favorites",
      description: "Saved routes",
      icon: Heart,
      gradient: "from-[#6412b4] to-[#2c084e]",
      path: "/favorites",
    },
    {
      title: "Admin Panel",
      description: "System management",
      icon: Users,
      gradient: "from-[#6412b4] to-[#2c084e]",
      path: "/admin",
      adminOnly: true,
    },
  ]

  // Filter features based on user role
  const features = allFeatures.filter((feature) => !feature.adminOnly || context?.user?.isAdmin)

  const stats = [
    { value: "500+", label: "Active Routes" },
    { value: "50K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "5sec", label: "Refresh Rate" },
    { value: "200+", label: "Active Buses" },
  ]

  const popularRoutes = [
    { route: "Central Station to Airport", details: "3 buses • 15mins" },
    { route: "Mall Road to University", details: "5 buses • 20 mins" },
    { route: "Downtown to Hospital", details: "2 buses • 12 mins" },
  ]

  const handleHelpClick = () => {
    navigate("/help")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      {/* ... existing floating help button ... */}
      <button
        onClick={handleHelpClick}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-[#6412b4] to-[#9333ea] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <HelpCircle className="w-8 h-8" />
      </button>

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-8 w-full relative">
        {/* ... existing hero and search sections ... */}
        <div className="relative bg-gradient-to-r from-[#6412b4] to-[#2c084e] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden mb-12 h-[268px]">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
          <div className="absolute inset-0 opacity-30">
            <img src={imgHero || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative px-16 py-16">
            <h1 className="text-white text-[60px] font-bold leading-[60px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] mb-4">
              Welcome to RouteMate
            </h1>
            <p className="text-white text-[24px] font-medium leading-[32px] opacity-90">
              Your intelligent companion for seamless city travel
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-[#b992de] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-[rgba(220,252,231,0.2)] p-8 mb-12">
          <h2 className="text-[#2c084e] text-[28px] font-bold leading-[32px] mb-6">Plan Your Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* From Input */}
            <div className="md:col-span-3 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="From (Source location)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-[20px] border-[5px] border-white text-black placeholder-black text-[18px] focus:outline-none"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p399b3500} stroke="#2C084E" strokeWidth="1.66667" />
                    <path d={svgPaths.p35ba4680} stroke="#2C084E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>

            {/* To Input */}
            <div className="md:col-span-3 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="To (Destination)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-[20px] border-[5px] border-white text-black placeholder-black text-[18px] focus:outline-none"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3b004e00} stroke="#2C084E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3 relative" ref={sortDropdownRef}>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="relative bg-white rounded-[20px] border-[5px] border-white h-[57.778px] flex items-center justify-between px-4 w-full hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-[#2c084e]" />
                  <p className="text-[#2c084e] text-[18px]">{sortOptions.find((s) => s.id === sortBy)?.label}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#2c084e] transition-transform ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl py-2 z-50 border-2 border-purple-100 animate-in slide-in-from-top-2 duration-200">
                  {sortOptions.map((option) => {
                    const Icon = option.icon
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id)
                          setShowSortDropdown(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                          sortBy === option.id ? "bg-purple-50 text-[#6412b4]" : "text-[#2c084e] hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-[16px] font-medium">{option.label}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="md:col-span-3">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-[#6412b4] to-[#2c084e] text-white px-8 py-4 h-[58px] rounded-[20px] hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
              >
                <Search className="w-5 h-5" />
                <span className="text-[18px]">Search Routes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Features */}
        <div className={`grid grid-cols-1 ${features.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-6 mb-12`}>
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(feature.path)}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-[16px] p-6 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all border border-white border-opacity-20 h-[185.778px] text-left hover:scale-105"
            >
              <div
                className={`w-16 h-16 rounded-[16px] bg-gradient-to-b ${feature.gradient} flex items-center justify-center mb-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#1e2939] text-[20px] font-bold leading-[28px] mb-2">{feature.title}</h3>
              <p className="text-[#4a5565] text-[15px] leading-[20px]">{feature.description}</p>
            </button>
          ))}
        </div>

        {/* ... existing Why Choose and Popular Routes sections ... */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-white border-opacity-20 p-8 mb-12">
          <h2 className="text-[#1e2939] text-[28px] font-bold leading-[32px] mb-6">Why Choose RouteMate?</h2>

          <div className="flex gap-12 items-center">
            <div className="flex-1 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-[#2c084e] text-[40px] font-extrabold leading-[40px] mb-2">{stat.value}</p>
                  <p className="text-[#4a5565] text-[16px] font-medium leading-[20px]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex-1 relative">
              <div className="shadow-[0px_45px_50px_0px_rgba(0,0,0,0.25)]">
                <img src={imgHero || "/placeholder.svg"} alt="Bus" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#644f78] to-[#b992de] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-white border-opacity-20 p-8">
          <h3 className="text-white text-[28px] font-bold leading-[32px] mb-6">Popular Routes</h3>

          <div className="space-y-4">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick("/search")}
                className="w-full bg-neutral-100 rounded-[20px] p-4 hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <p className="text-[#1e2939] text-[16px] font-semibold leading-[24px] mb-1">{route.route}</p>
                  <p className="text-[#4a5565] text-[14px] font-medium leading-[20px]">{route.details}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#99A1AF]" />
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
