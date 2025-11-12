"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Bus, MapPin, Trash2, Edit, Plus, X, Clock, Users, Activity, TrendingUp } from "lucide-react"
import { toast } from "sonner"
import { routeAPI, busAPI } from "../services/api"

export default function AdminDashboard() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showAddModal, setShowAddModal] = useState(false)
  const [modalType, setModalType] = useState<"bus" | "route">("route")
  const [routes, setRoutes] = useState<any[]>([])
  const [buses, setBuses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<any>({})

  const isRoutesView = location.pathname === "/admin" || location.pathname === "/admin/"
  const isBusesView = location.pathname.includes("/admin/buses")
  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [routesData, busesData] = await Promise.all([routeAPI.getAllRoutes(), busAPI.getAllBuses()])
      setRoutes(routesData)
      setBuses(busesData)
    } catch (error: any) {
      toast.error("Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (_id: number, type: "bus" | "route") => {
    toast.success(`${type === "bus" ? "Bus" : "Route"} deleted successfully`)
  }

  const handleAdd = async () => {
    try {
      if (modalType === "route") {
        await routeAPI.addRoute(formData, token || "")
        setRoutes([...routes, formData])
      } else {
        await busAPI.addBus(formData, token || "")
        setBuses([...buses, formData])
      }
      setShowAddModal(false)
      setFormData({})
      toast.success(`${modalType === "bus" ? "Bus" : "Route"} added successfully`)
    } catch (error: any) {
      toast.error(error.message || "Failed to add")
    }
  }

  const openAddModal = (type: "bus" | "route") => {
    setModalType(type)
    setFormData({})
    setShowAddModal(true)
  }

  const stats = [
    { label: "Total Routes", value: routes.length, icon: MapPin, gradient: "from-blue-500 to-cyan-500" },
    { label: "Active Buses", value: buses.length, icon: Bus, gradient: "from-purple-500 to-pink-500" },
    { label: "Total Drivers", value: buses.length, icon: Users, gradient: "from-green-500 to-emerald-500" },
    { label: "System Status", value: "99.9%", icon: Activity, gradient: "from-orange-500 to-red-500" },
  ]

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

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        {/* ... existing header ... */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-2">Admin Dashboard</h1>
              <p className="text-[18px] text-[#6a7282]">Manage your bus routes and fleet efficiently</p>
            </div>
            <button
              onClick={() => openAddModal(isRoutesView ? "route" : "bus")}
              className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all flex items-center gap-3 font-semibold text-[16px]"
            >
              <Plus className="w-6 h-6" />
              {isRoutesView ? "Add New Route" : "Add New Bus"}
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-[#6a7282] text-[14px] mb-1">{stat.label}</p>
                  <p className="text-[32px] font-bold text-[#2c084e]">{stat.value}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => navigate("/admin")}
            className={`px-8 py-4 rounded-2xl transition-all font-semibold text-[16px] ${
              isRoutesView
                ? "bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg"
                : "bg-white text-[#6a7282] hover:bg-purple-50 hover:text-[#6412b4]"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Route Management
            </div>
          </button>

          <button
            onClick={() => navigate("/admin/buses")}
            className={`px-8 py-4 rounded-2xl transition-all font-semibold text-[16px] ${
              isBusesView
                ? "bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg"
                : "bg-white text-[#6a7282] hover:bg-purple-50 hover:text-[#6412b4]"
            }`}
          >
            <div className="flex items-center gap-2">
              <Bus className="w-5 h-5" />
              Bus Management
            </div>
          </button>
        </div>

        {/* Routes View */}
        {isRoutesView && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] px-8 py-6">
              <h2 className="text-[24px] font-bold text-white">Active Routes</h2>
              <p className="text-purple-100 text-[14px] mt-1">Manage all bus routes in your system</p>
            </div>

            {routes.length === 0 ? (
              <div className="p-8 text-center text-[#6a7282]">No routes found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Route Name</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Source</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Destination</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Operating Hours</th>
                      <th className="text-right p-6 text-[#2c084e] font-semibold text-[15px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((route, index) => (
                      <tr
                        key={route.id}
                        className={`border-t border-gray-100 hover:bg-purple-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-[16px] font-semibold text-[#2c084e]">{route.routeName}</span>
                          </div>
                        </td>
                        <td className="p-6 text-[#4a5565]">{route.source}</td>
                        <td className="p-6 text-[#4a5565]">{route.destination}</td>
                        <td className="p-6">
                          <span className="flex items-center gap-2 text-[#4a5565] text-[15px]">
                            <Clock className="w-4 h-4" />
                            {route.operatingHours}
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex gap-2 justify-end">
                            <button className="p-3 hover:bg-purple-100 rounded-xl transition-all group">
                              <Edit className="w-5 h-5 text-[#6412b4] group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                              onClick={() => handleDelete(route.id, "route")}
                              className="p-3 hover:bg-red-100 rounded-xl transition-all group"
                            >
                              <Trash2 className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Buses View */}
        {isBusesView && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] px-8 py-6">
              <h2 className="text-[24px] font-bold text-white">Bus Fleet Management</h2>
              <p className="text-purple-100 text-[14px] mt-1">Monitor and manage all buses in your fleet</p>
            </div>

            {buses.length === 0 ? (
              <div className="p-8 text-center text-[#6a7282]">No buses found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Bus Number</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Type</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Driver</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Fare</th>
                      <th className="text-left p-6 text-[#2c084e] font-semibold text-[15px]">Available Seats</th>
                      <th className="text-right p-6 text-[#2c084e] font-semibold text-[15px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buses.map((bus, index) => (
                      <tr
                        key={bus.id}
                        className={`border-t border-gray-100 hover:bg-purple-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                              <Bus className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-[16px] font-semibold text-[#2c084e]">{bus.busNumber}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <span
                            className={`px-4 py-2 rounded-xl font-semibold text-[14px] ${
                              bus.busType === "AC"
                                ? "bg-cyan-100 text-cyan-700"
                                : bus.busType === "Green"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {bus.busType}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className="flex items-center gap-2 text-[#4a5565] text-[15px]">
                            <Users className="w-4 h-4" />
                            {bus.driverName}
                          </span>
                        </td>
                        <td className="p-6 text-[#4a5565]">${bus.fare}</td>
                        <td className="p-6 text-[#4a5565]">
                          {bus.availableSeats}/{bus.totalSeats}
                        </td>
                        <td className="p-6">
                          <div className="flex gap-2 justify-end">
                            <button className="p-3 hover:bg-purple-100 rounded-xl transition-all group">
                              <Edit className="w-5 h-5 text-[#6412b4] group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                              onClick={() => handleDelete(bus.id, "bus")}
                              className="p-3 hover:bg-red-100 rounded-xl transition-all group"
                            >
                              <Trash2 className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Add Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl transform transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-lg">
                  {modalType === "bus" ? (
                    <Bus className="w-7 h-7 text-white" />
                  ) : (
                    <MapPin className="w-7 h-7 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-[28px] font-bold text-[#2c084e]">
                    Add New {modalType === "bus" ? "Bus" : "Route"}
                  </h2>
                  <p className="text-[14px] text-[#6a7282]">Fill in the details below</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6 text-[#6a7282]" />
              </button>
            </div>

            {/* Form */}
            {modalType === "route" ? (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Route Name"
                  value={formData.routeName || ""}
                  onChange={(e) => setFormData({ ...formData, routeName: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="text"
                  placeholder="Source"
                  value={formData.source || ""}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="text"
                  placeholder="Destination"
                  value={formData.destination || ""}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="text"
                  placeholder="Operating Hours"
                  value={formData.operatingHours || ""}
                  onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Bus Number"
                  value={formData.busNumber || ""}
                  onChange={(e) => setFormData({ ...formData, busNumber: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <select
                  value={formData.busType || ""}
                  onChange={(e) => setFormData({ ...formData, busType: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                >
                  <option value="">Select Bus Type</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                  <option value="Green">Green</option>
                </select>
                <input
                  type="text"
                  placeholder="Driver Name"
                  value={formData.driverName || ""}
                  onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="text"
                  placeholder="Departure Time"
                  value={formData.departureTime || ""}
                  onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="text"
                  placeholder="Arrival Time"
                  value={formData.arrivalTime || ""}
                  onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <input
                  type="number"
                  placeholder="Fare"
                  value={formData.fare || ""}
                  onChange={(e) => setFormData({ ...formData, fare: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                />
                <select
                  value={formData.routeId || ""}
                  onChange={(e) => setFormData({ ...formData, routeId: Number.parseInt(e.target.value) })}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-[#6412b4]"
                >
                  <option value="">Select Route</option>
                  {routes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.routeName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-100">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 border-2 border-purple-200 text-[#6412b4] py-4 rounded-xl hover:bg-purple-50 transition-all font-semibold text-[16px]"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-[16px] flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add {modalType === "bus" ? "Bus" : "Route"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
