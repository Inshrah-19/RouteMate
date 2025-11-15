"use client"

import { useState, useContext, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Search, MapPin, Navigation, Clock, Heart, Users, Filter, ChevronRight, HelpCircle, ChevronDown, TrendingUp } from 'lucide-react'
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
      navigate("/signin")
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
      navigate("/signin")
      return
    }

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

  const features = allFeatures.filter((feature) => !feature.adminOnly || context?.user?.isAdmin)

  const stats = [
    { value: "500+", label: "Active Routes" },
    { value: "50K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "5sec", label: "Refresh Rate" },
    { value: "200+", label: "Active Buses" },
  ]

  const popularRoutes = [
    { route: "Central Station → Airport", details: "3 buses • 15mins" },
    { route: "Mall Road → University", details: "5 buses • 20 mins" },
    { route: "Downtown → Hospital", details: "2 buses • 12 mins" },
  ]

  const handleHelpClick = () => navigate("/help")

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <button
        onClick={handleHelpClick}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6412b4] to-[#9333ea] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all"
      >
        <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <main className="flex-1 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-10 w-full relative">
        <div className="relative bg-gradient-to-r from-[#6412b4] to-[#2c084e] rounded-[20px] shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center h-auto md:h-[250px]">
          <div className="absolute inset-0 opacity-30">
            <img src={imgHero || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative px-4 sm:px-8 py-10 md:py-14 text-center md:text-left flex-1 z-10">
            <h1 className="text-white text-[28px] sm:text-[40px] md:text-[56px] font-bold leading-tight mb-3">
              Welcome to RouteMate
            </h1>
            <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] font-medium opacity-90">
              Your intelligent companion for seamless city travel
            </p>
          </div>
        </div>

        <div className="bg-[#b992de] rounded-[14px] shadow-lg border border-[rgba(220,252,231,0.2)] p-4 sm:p-6 md:p-8 mb-10">
          <h2 className="text-[#2c084e] text-[20px] sm:text-[24px] font-bold mb-5">Plan Your Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
            {/* From Input */}
            <div className="md:col-span-3 relative">
              <input
                type="text"
                placeholder="From (Source location)"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white rounded-[16px] border-[3px] border-white text-black placeholder-black text-[15px] sm:text-[17px] focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p399b3500} stroke="#2C084E" strokeWidth="1.66667" />
                  <path d={svgPaths.p35ba4680} stroke="#2C084E" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>

            {/* To Input */}
            <div className="md:col-span-3 relative">
              <input
                type="text"
                placeholder="To (Destination)"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full pl-10 pr-4 py-3 sm:py-4 bg-white rounded-[16px] border-[3px] border-white text-black placeholder-black text-[15px] sm:text-[17px] focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3b004e00} stroke="#2C084E" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3 relative" ref={sortDropdownRef}>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="relative bg-white rounded-[16px] border-[3px] border-white h-[52px] sm:h-[57px] flex items-center justify-between px-4 w-full hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c084e]" />
                  <p className="text-[#2c084e] text-[15px] sm:text-[17px]">
                    {sortOptions.find((s) => s.id === sortBy)?.label}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#2c084e] transition-transform ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl py-2 z-50 border-2 border-purple-100">
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
                        <span className="text-[15px] sm:text-[16px] font-medium">{option.label}</span>
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
                className="w-full bg-gradient-to-r from-[#6412b4] to-[#2c084e] text-white px-4 py-3 sm:px-8 sm:py-4 h-[52px] sm:h-[58px] rounded-[16px] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span className="text-[15px] sm:text-[17px]">Search Routes</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-${features.length === 4 ? "4" : "3"} gap-4 sm:gap-6 mb-10`}
        >
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(feature.path)}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-[14px] p-4 sm:p-6 hover:shadow-md transition-all border border-white border-opacity-20 h-[160px] sm:h-[185px] text-left hover:scale-105"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] bg-gradient-to-b ${feature.gradient} flex items-center justify-center mb-3 sm:mb-4`}
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-[#1e2939] text-[16px] sm:text-[20px] font-bold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-[#4a5565] text-[13px] sm:text-[15px]">{feature.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-[14px] shadow-lg border border-white border-opacity-20 p-5 sm:p-8 mb-10">
          <h2 className="text-[#1e2939] text-[22px] sm:text-[28px] font-bold mb-5">Why Choose RouteMate?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-[#2c084e] text-[24px] sm:text-[36px] font-extrabold mb-1">{stat.value}</p>
                  <p className="text-[#4a5565] text-[13px] sm:text-[16px] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bus Image */}
            <div className="flex-1 w-full">
              <img
                src={imgHero || "/placeholder.svg"}
                alt="Bus"
                className="w-full max-w-[320px] sm:max-w-[450px] mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#644f78] to-[#b992de] rounded-[14px] shadow-lg border border-white border-opacity-20 p-5 sm:p-8 mb-10">
          <h3 className="text-white text-[22px] sm:text-[28px] font-bold mb-5">Popular Routes</h3>
          <div className="space-y-3 sm:space-y-4">
            {popularRoutes.map((route, idx) => (
              <button
                key={idx}
                onClick={() => handleFeatureClick("/search")}
                className="w-full bg-neutral-100 rounded-[16px] p-3 sm:p-4 hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <p className="text-[#1e2939] text-[15px] sm:text-[18px] font-semibold mb-1">{route.route}</p>
                  <p className="text-[#4a5565] text-[13px] sm:text-[15px]">{route.details}</p>
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
