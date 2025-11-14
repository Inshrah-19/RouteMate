"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Clock, MapPin, Bus, Zap, Leaf, ArrowRight, Navigation } from "lucide-react"
import { busAPI } from "../services/api"
import { toast } from "sonner"

export default function BusTimetables() {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState("all")
  const [buses, setBuses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedBuses, setExpandedBuses] = useState<number[]>([])

  const tabs = [
    { id: "all", label: "All Buses", icon: Bus, color: "from-purple-500 to-pink-500" },
    { id: "AC", label: "AC Only", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { id: "Green", label: "Green Bus", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { id: "Non-AC", label: "Non-AC", icon: Bus, color: "from-orange-500 to-red-500" },
  ]

  useEffect(() => {
    fetchBuses()
  }, [selectedTab])

  const fetchBuses = async () => {
    setLoading(true)
    try {
      let data
      if (selectedTab === "all") {
        data = await busAPI.getAllBuses()
      } else {
        data = await busAPI.getBusesByType(selectedTab)
      }
      setBuses(data)
      setExpandedBuses([])
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch buses")
      setBuses([])
    } finally {
      setLoading(false)
    }
  }

  const getTabGradient = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId)
    return tab?.color || "from-purple-500 to-pink-500"
  }

  const toggleBus = (index: number) => {
    setExpandedBuses((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const timetableData = [
    {
      departure: "08:00 AM",
      arrival: "09:30 AM",
      duration: "1h 30m",
      status: "On-time",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      departure: "10:00 AM",
      arrival: "11:30 AM",
      duration: "1h 30m",
      status: "On-time",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      departure: "12:00 PM",
      arrival: "01:30 PM",
      duration: "1h 30m",
      status: "Delayed 5m",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      departure: "02:00 PM",
      arrival: "03:30 PM",
      duration: "1h 30m",
      status: "On-time",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      departure: "04:00 PM",
      arrival: "05:30 PM",
      duration: "1h 30m",
      status: "On-time",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      departure: "06:00 PM",
      arrival: "07:30 PM",
      duration: "1h 30m",
      status: "On-time",
      color: "bg-green-50 text-green-700 border-green-200",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6412b4] mx-auto mb-4"></div>
            <p className="text-[#2c084e] font-semibold">Loading buses...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-12 w-full">
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-[#2c084e] mb-1 sm:mb-2">
              Bus Timetables
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#6a7282]">View schedules and track all available routes</p>
          </div>
          <div className="bg-white rounded-[14px] sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-purple-100 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-5 h-5 sm:w-6 md:w-8 text-[#6412b4]" />
              <div>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] text-[#6a7282]">Last Updated</p>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-bold text-[#2c084e]">Just now</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[16px] sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white">
            <Bus className="w-8 h-8 sm:w-10 mb-2 sm:mb-3 opacity-80" />
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold mb-1">{buses.length}</p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] opacity-90">Total Buses</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[16px] sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white">
            <Zap className="w-8 h-8 sm:w-10 mb-2 sm:mb-3 opacity-80" />
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold mb-1">
              {buses.filter((b) => b.busType === "AC").length}
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] opacity-90">AC Buses</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-[16px] sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white">
            <Leaf className="w-8 h-8 sm:w-10 mb-2 sm:mb-3 opacity-80" />
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold mb-1">
              {buses.filter((b) => b.busType === "Green").length}
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] opacity-90">Eco-Friendly</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-[16px] sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white">
            <Bus className="w-8 h-8 sm:w-10 mb-2 sm:mb-3 opacity-80" />
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold mb-1">
              {buses.filter((b) => b.busType === "Non-AC").length}
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] opacity-90">Non-AC</p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] sm:rounded-3xl p-2 sm:p-3 mb-6 sm:mb-8 shadow-lg border-2 border-purple-100 flex justify-center flex-wrap gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 md:px-6 py-2 sm:py-3 rounded-[12px] sm:rounded-2xl transition-all font-semibold text-[13px] sm:text-[14px] md:text-[15px] whitespace-nowrap ${
                  selectedTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-[#6a7282] hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 md:w-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {buses.length === 0 ? (
          <div className="text-center py-12">
            <Bus className="w-12 h-12 sm:w-16 md:w-16 text-[#6412b4] mx-auto mb-3 sm:mb-4 opacity-50" />
            <p className="text-[#6a7282] text-[16px] sm:text-[18px]">No buses available for this filter</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {buses.map((bus, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] sm:rounded-3xl shadow-xl overflow-hidden border-2 border-white hover:shadow-2xl transition-all"
              >
                <div
                  className={`bg-gradient-to-r ${getTabGradient(selectedTab)} p-3 sm:p-4 md:p-6 cursor-pointer sm:cursor-default select-none`}
                  onClick={() => toggleBus(index)}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                    {/* Bus Info */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 sm:w-14 md:w-16 bg-white rounded-[12px] sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Bus className="w-6 h-6 sm:w-7 md:w-8 text-[#6412b4]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap mb-1">
                          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-extrabold text-white truncate">
                            {bus.busNumber}
                          </h3>
                          <span className="bg-white text-[#6412b4] px-2 sm:px-3 md:px-4 py-1 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold shadow-lg whitespace-nowrap">
                            {bus.busType}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-[13px] sm:text-[14px] md:text-[16px] truncate">
                          <MapPin className="w-3 h-3 sm:w-4 md:w-4 flex-shrink-0" />
                          <p className="truncate">{bus.Route?.routeName || "Route info"}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/live-tracking/${bus.id}`)
                      }}
                      className="bg-white text-[#6412b4] px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-[12px] md:rounded-xl hover:shadow-xl transition-all font-semibold text-[12px] sm:text-[13px] md:text-[14px] flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                    >
                      <Navigation className="w-3 h-3 sm:w-4 md:w-5" />
                      <span className="hidden sm:inline">Track Live</span>
                      <span className="sm:hidden">Track</span>
                    </button>
                  </div>
                </div>

                {expandedBuses.includes(index) && (
                  <div className="p-3 sm:p-4 md:p-6 bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                      {timetableData.map((time, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[12px] sm:rounded-2xl p-3 sm:p-4 md:p-5 border-2 border-purple-100 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                            <div>
                              <p className="text-[11px] sm:text-[12px] text-[#6a7282] mb-0.5 sm:mb-1">Departure</p>
                              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#2c084e]">
                                {time.departure}
                              </p>
                            </div>
                            <ArrowRight className="w-3 h-3 sm:w-4 md:w-5 text-[#6a7282] mt-1 sm:mt-2" />
                            <div className="text-right">
                              <p className="text-[11px] sm:text-[12px] text-[#6a7282] mb-0.5 sm:mb-1">Arrival</p>
                              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#2c084e]">
                                {time.arrival}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-purple-200 text-[12px] sm:text-[13px] md:text-[14px]">
                            <div className="flex items-center gap-1 sm:gap-2 text-[#6a7282]">
                              <Clock className="w-3 h-3 sm:w-4 md:w-4" />
                              <span className="font-medium">{time.duration}</span>
                            </div>
                            <span
                              className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-bold border-2 ${time.color}`}
                            >
                              {time.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
