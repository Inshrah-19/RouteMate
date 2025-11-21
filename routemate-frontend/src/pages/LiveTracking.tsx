"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MapPin, Navigation, Clock, Radio, RefreshCw, Search, Filter, ChevronDown, TrendingUp } from "lucide-react"
import { toast } from "sonner"
import { busAPI, stopsAPI } from "../services/api"
import svgPaths from "../imports/svg-wjwxf1kg3t"

export default function LiveTracking() {
  const { busId } = useParams()
  const navigate = useNavigate()

  const [busInfo, setBusInfo] = useState<any>(null)
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [sortBy, setSortBy] = useState("time")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [loading, setLoading] = useState(true)
  const [routeStops, setRouteStops] = useState<any[]>([])
  const sortDropdownRef = useRef<HTMLDivElement>(null)

  const sortOptions = [
    { id: "time", label: "Sort by Time", icon: Clock },
    { id: "distance", label: "Sort by Distance", icon: MapPin },
    { id: "stops", label: "Sort by Stops", icon: TrendingUp },
  ]

  useEffect(() => {
    fetchBusData()
  }, [busId])

  const fetchBusData = async () => {
    try {
      if (busId) {
        const buses = await busAPI.getAllBuses()
        const selectedBus = buses.find((b: any) => b.id === Number.parseInt(busId))

        if (selectedBus) {
          const stops = await stopsAPI.getRouteStops(selectedBus.routeId)
          setRouteStops(stops)

          // Get next stop based on current position (assume 40% through journey)
          const nextStopIndex = Math.floor(stops.length * 0.4)
          const nextStop = stops[nextStopIndex] || stops[stops.length - 1]

          setBusInfo({
            id: selectedBus.id,
            number: selectedBus.busNumber,
            route: `${selectedBus.Route?.source} → ${selectedBus.Route?.destination}`,
            currentLocation: stops[Math.max(0, nextStopIndex - 1)]?.stopName || "In Transit",
            nextStop: nextStop?.stopName || "Next Stop",
            eta: "5 mins",
            stopsRemaining: Math.max(0, stops.length - nextStopIndex),
            progress: 40,
            speed: "45 km/h",
            passengers: `${selectedBus.totalSeats - selectedBus.availableSeats}/${selectedBus.totalSeats}`,
            departureTime: selectedBus.departureTime,
            arrivalTime: selectedBus.arrivalTime,
            fare: selectedBus.fare,
            routeId: selectedBus.routeId,
          })
        }
      }
    } catch (error) {
      console.error("[v0] Error fetching bus data:", error)
      toast.error("Failed to fetch bus data")
    } finally {
      setLoading(false)
    }
  }

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
    if (from && to) {
      navigate(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&sort=${sortBy}`)
    } else {
      toast.error("Please enter both pickup and destination")
    }
  }

  const upcomingStops = routeStops.map((stop, index) => ({
    name: stop.stopName,
    time: `${5 + index * 5} mins`,
    status: index === 0 ? "next" : index === routeStops.length - 1 ? "destination" : "upcoming",
    passengers: Math.floor(Math.random() * 15),
  }))

  const stopMarkers = routeStops.map((stop, idx) => ({
    name: stop.stopName,
    lat: 40.7128 + idx * 0.005,
    lng: -74.006 + idx * 0.005,
    passed: idx < Math.floor(routeStops.length * 0.4),
    current: idx === Math.floor(routeStops.length * 0.4),
    upcoming: idx > Math.floor(routeStops.length * 0.4),
  }))

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6412b4]"></div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Header - Responsive */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#2c084e] mb-1 sm:mb-2">
                Live Bus Tracking
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#6a7282]">
                Track your bus in real-time with accurate GPS locations
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-green-100 w-full md:w-auto flex items-center gap-3">
              <div className="relative">
                <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-[#6a7282]">Status</p>
                <p className="text-sm sm:text-base font-bold text-green-600">Live Tracking</p>
              </div>
            </div>
          </div>

          {/* Search Section - Responsive */}
          <div className="bg-[#b992de] rounded-2xl sm:rounded-[14px] shadow-lg border border-[rgba(220,252,231,0.2)] p-4 sm:p-6 md:p-8">
            <h2 className="text-[#2c084e] text-lg sm:text-2xl font-bold mb-4 sm:mb-5">Track your Bus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
              {/* From Input */}
              <div className="lg:col-span-3 relative">
                <input
                  type="text"
                  placeholder="From (Source)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 md:py-4 bg-white rounded-[16px] border-[3px] border-white text-black placeholder-black text-sm sm:text-base focus:outline-none"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p399b3500} stroke="#2C084E" strokeWidth="1.66667" />
                    <path d={svgPaths.p35ba4680} stroke="#2C084E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>

              {/* To Input */}
              <div className="lg:col-span-3 relative">
                <input
                  type="text"
                  placeholder="To (Destination)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 md:py-4 bg-white rounded-[16px] border-[3px] border-white text-black placeholder-black text-sm sm:text-base focus:outline-none"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3b004e00} stroke="#2C084E" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="lg:col-span-3 relative" ref={sortDropdownRef}>
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="relative bg-white rounded-[16px] border-[3px] border-white h-[44px] sm:h-[52px] md:h-[57px] flex items-center justify-between px-4 w-full hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c084e]" />
                    <p className="text-[#2c084e] text-xs sm:text-sm md:text-base hidden sm:inline">
                      {sortOptions.find((s) => s.id === sortBy)?.label}
                    </p>
                    <p className="text-[#2c084e] text-xs sm:text-sm md:text-base sm:hidden">Sort</p>
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
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left text-sm ${
                            sortBy === option.id ? "bg-purple-50 text-[#6412b4]" : "text-[#2c084e] hover:bg-gray-50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{option.label}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="lg:col-span-3">
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-[#6412b4] to-[#2c084e] text-white px-4 py-2 sm:py-3 md:py-4 h-[44px] sm:h-[52px] md:h-[58px] rounded-[16px] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm md:text-base">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Map Container */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#e7f3ff]">
                {/* Street Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6412b4" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Route Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 80 500 Q 200 450, 300 380 Q 400 310, 500 280 Q 600 250, 700 200 Q 800 150, 900 100"
                    fill="none"
                    stroke="#6412b4"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="15,10"
                    opacity="0.4"
                  />
                  <path
                    d="M 80 500 Q 200 450, 300 380 Q 400 310, 420 295"
                    fill="none"
                    stroke="#6412b4"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>

                {/* Stop Markers */}
                {stopMarkers.map((stop, idx) => (
                  <div
                    key={idx}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                    style={{ left: `${15 + idx * 14}%`, top: `${85 - idx * 13}%` }}
                  >
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 shadow-lg ${
                        stop.passed
                          ? "bg-[#6412b4] border-[#6412b4]"
                          : stop.current
                            ? "bg-white border-[#6412b4] animate-pulse"
                            : "bg-white border-gray-300"
                      }`}
                    />
                    <div
                      className={`absolute top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded-lg shadow-md text-xs ${
                        stop.current ? "border-2 border-[#6412b4]" : "border border-gray-200"
                      }`}
                    >
                      {stop.name}
                    </div>
                  </div>
                ))}

                {/* Moving Bus Icon */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{ left: "43%", top: "50%" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 -m-4">
                      <div className="w-24 h-24 bg-[#6412b4] rounded-full animate-ping opacity-20" />
                    </div>
                    <div className="absolute inset-0 -m-2">
                      <div className="w-20 h-20 bg-[#6412b4] rounded-full animate-pulse opacity-30" />
                    </div>

                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6412b4] to-[#9333ea] rounded-2xl flex items-center justify-center shadow-2xl z-10 border-4 border-white">
                      <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-white transform rotate-45" />
                    </div>

                    <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 sm:px-3 py-1 rounded-full shadow-lg border-2 border-[#6412b4] whitespace-nowrap">
                      <p className="text-xs sm:text-sm text-[#6412b4] font-medium">{busInfo?.speed || "45 km/h"}</p>
                    </div>
                  </div>
                </div>

                {/* Info Banner */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-[#6412b4] to-[#9333ea] rounded-2xl p-3 sm:p-4 shadow-xl text-white max-w-xs">
                  <p className="text-xs sm:text-sm mb-1">Next Stop</p>
                  <p className="text-base sm:text-lg font-semibold">{busInfo?.nextStop || "Next Stop"}</p>
                  <p className="text-xs sm:text-sm opacity-80">Arriving in {busInfo?.eta || "5 mins"}</p>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl hidden sm:block">
                  <h4 className="text-xs sm:text-sm text-[#2c084e] font-bold mb-2 sm:mb-3">Legend</h4>
                  <div className="space-y-1 sm:space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#6412b4] rounded-full" />
                      <span className="text-[#4a5565]">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-[#6412b4] rounded-full" />
                      <span className="text-[#4a5565]">Current</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-300 rounded-full" />
                      <span className="text-[#4a5565]">Upcoming</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Badge */}
            <div className="bg-[#299dd3] rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl w-fit">
              <div className="flex items-center gap-2 sm:gap-3">
                <RefreshCw
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <p className="text-white font-semibold text-xs sm:text-sm">Updates every 5 seconds</p>
              </div>
            </div>
          </div>

          {/* Info Panel - Responsive */}
          <div className="space-y-4 sm:space-y-6">
            {/* Bus Status Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-[#2c084e] mb-4 text-base sm:text-lg font-bold">
                {busInfo?.number || `Bus ${busId}`}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-2 sm:p-3 hover:bg-[#f8f4ff] rounded-xl transition-all">
                  <p className="text-[#6a7282] text-xs sm:text-sm">Current Location</p>
                  <p className="text-[#1e2939] font-semibold text-sm sm:text-base">
                    {busInfo?.currentLocation || "In Transit"}
                  </p>
                </div>
                <div className="p-2 sm:p-3 hover:bg-[#f8f4ff] rounded-xl transition-all">
                  <p className="text-[#6a7282] text-xs sm:text-sm">Next Stop</p>
                  <p className="text-[#1e2939] font-semibold text-sm sm:text-base">
                    {busInfo?.nextStop || "Next Stop"}
                  </p>
                </div>
                <div className="p-2 sm:p-3 hover:bg-[#f8f4ff] rounded-xl transition-all">
                  <p className="text-[#6a7282] text-xs sm:text-sm">ETA</p>
                  <p className="text-[#1e2939] font-semibold text-sm sm:text-base">{busInfo?.eta || "5 mins"}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <div className="text-center bg-[#f9f9ff] rounded-xl py-2 sm:py-3 px-2">
                    <p className="text-[#6a7282] text-xs sm:text-sm">Speed</p>
                    <p className="font-semibold text-[#6412b4] text-sm sm:text-base">{busInfo?.speed || "45 km/h"}</p>
                  </div>
                  <div className="text-center bg-[#f9f9ff] rounded-xl py-2 sm:py-3 px-2">
                    <p className="text-[#6a7282] text-xs sm:text-sm">Occupancy</p>
                    <p className="font-semibold text-[#6412b4] text-sm sm:text-base">
                      {busInfo?.passengers || "28/40"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Stops Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-[#2c084e] mb-4 text-base sm:text-lg font-bold">Upcoming Stops</h3>

              <div className="hidden sm:flex flex-col gap-2 sm:gap-3">
                {upcomingStops.map((stop, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 sm:p-3 rounded-xl border transition-all ${
                      stop.status === "next"
                        ? "bg-[#f7eeff] border-[#6412b4] shadow-md"
                        : "bg-gray-50 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-[#1e2939] text-xs sm:text-sm">{stop.name}</p>
                      {stop.passengers > 0 && <p className="text-xs text-[#6a7282]">{stop.passengers} waiting</p>}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-semibold ${stop.status === "next" ? "text-[#6412b4]" : "text-[#6a7282]"}`}
                    >
                      {stop.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile horizontal scroll */}
              <div
                className="sm:hidden flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {upcomingStops.map((stop, i) => (
                  <div
                    key={i}
                    className={`min-w-[80px] flex-shrink-0 flex flex-col items-center justify-center p-2 rounded-2xl border snap-start ${
                      stop.status === "next" ? "bg-[#f7eeff] border-[#6412b4]" : "bg-gray-50 border-transparent"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mb-1 ${
                        stop.status === "next"
                          ? "bg-[#6412b4] animate-pulse"
                          : stop.status === "destination"
                            ? "bg-green-500"
                            : "bg-gray-300"
                      }`}
                    />
                    <p className="text-[10px] text-[#1e2939] truncate text-center">{stop.name}</p>
                    <p className="text-[9px] text-[#6a7282]">{stop.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
