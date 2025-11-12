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

  const tabs = [
    { id: "all", label: "All Buses", icon: Bus, color: "from-purple-500 to-pink-500" },
    { id: "AC", label: "AC Only", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { id: "Green", label: "Green Bus", icon: Leaf, color: "from-green-500 to-emerald-500" },
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

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        {/* ... existing header section ... */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-2">Bus Timetables</h1>
              <p className="text-[18px] text-[#6a7282]">View schedules and track all available routes</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#6412b4]" />
                <div>
                  <p className="text-[14px] text-[#6a7282]">Last Updated</p>
                  <p className="text-[16px] font-bold text-[#2c084e]">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl text-white">
            <Bus className="w-10 h-10 mb-3 opacity-80" />
            <p className="text-[32px] font-extrabold mb-1">{buses.length}</p>
            <p className="text-[15px] opacity-90">Total Buses</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-xl text-white">
            <Zap className="w-10 h-10 mb-3 opacity-80" />
            <p className="text-[32px] font-extrabold mb-1">{buses.filter((b) => b.busType === "AC").length}</p>
            <p className="text-[15px] opacity-90">AC Buses</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-6 shadow-xl text-white">
            <Leaf className="w-10 h-10 mb-3 opacity-80" />
            <p className="text-[32px] font-extrabold mb-1">{buses.filter((b) => b.busType === "Green").length}</p>
            <p className="text-[15px] opacity-90">Eco-Friendly</p>
          </div>
        </div>

        {/* Enhanced Tabs */}
        <div className="bg-white rounded-3xl p-2 mb-8 shadow-lg border-2 border-purple-100 inline-flex">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all font-semibold text-[15px] ${
                  selectedTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-[#6a7282] hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Timetable Cards */}
        {buses.length === 0 ? (
          <div className="text-center py-12">
            <Bus className="w-16 h-16 text-[#6412b4] mx-auto mb-4 opacity-50" />
            <p className="text-[#6a7282] text-[18px]">No buses available for this filter</p>
          </div>
        ) : (
          <div className="space-y-6">
            {buses.map((bus, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-white hover:shadow-2xl transition-all"
              >
                {/* Colored Header */}
                <div className={`bg-gradient-to-r ${getTabGradient(selectedTab)} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <Bus className="w-8 h-8 text-[#6412b4]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[24px] font-extrabold text-white">{bus.busNumber}</h3>
                          <span className="bg-white text-[#6412b4] px-4 py-1.5 rounded-full text-[13px] font-bold shadow-lg">
                            {bus.busType}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <MapPin className="w-4 h-4" />
                          <p className="text-[16px] font-medium">{bus.Route?.routeName}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/live-tracking/${bus.id}`)}
                      className="bg-white text-[#6412b4] px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center gap-2 group"
                    >
                      <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      <span>Track Live</span>
                    </button>
                  </div>
                </div>

                {/* Timetable Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {timetableData.map((time, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-100 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-[12px] text-[#6a7282] mb-1">Departure</p>
                            <p className="text-[20px] font-bold text-[#2c084e]">{time.departure}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#6a7282] mt-2" />
                          <div className="text-right">
                            <p className="text-[12px] text-[#6a7282] mb-1">Arrival</p>
                            <p className="text-[20px] font-bold text-[#2c084e]">{time.arrival}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-purple-200">
                          <div className="flex items-center gap-2 text-[#6a7282]">
                            <Clock className="w-4 h-4" />
                            <span className="text-[13px] font-medium">{time.duration}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[12px] font-bold border-2 ${time.color}`}>
                            {time.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
