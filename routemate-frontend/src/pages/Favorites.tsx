"use client"

import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Heart, Navigation, Clock, Trash2, Star, Bookmark, ChevronDown } from 'lucide-react'
import { AppContext } from "../App"
import { toast } from "sonner"
import { routeAPI } from "../services/api"

export default function Favorites() {
  const navigate = useNavigate()
  const context = useContext(AppContext)
  const [favorites, setFavorites] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const token = sessionStorage.getItem("token")


  useEffect(() => {
    fetchFavoritesAndRoutes()
  }, [token])

  const fetchFavoritesAndRoutes = async () => {
    try {
      await routeAPI.getAllRoutes()

      // For now, getting from localStorage or App context
      if (context?.favorites) {
        setFavorites(context.favorites)
      }
    } catch (error: any) {
      toast.error("Failed to fetch favorites")
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = (routeId: string) => {
    context?.removeFavorite(routeId)
    setFavorites(favorites.filter(f => f.id !== routeId))
    toast.success("Removed from favorites")
  }

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

  const favoriteCount = favorites?.length || 0

  const countAC = favorites?.reduce((acc, route) => {
    if (route.busType?.trim().toLowerCase() === "ac") acc += 1
    return acc
  }, 0) || 0

  const countGreen = favorites?.reduce((acc, route) => {
    if (route.busType?.trim().toLowerCase().includes("green")) acc += 1
    return acc
  }, 0) || 0

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Header - Responsive */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 sm:mb-8 lg:mb-10 gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#2c084e] mb-1 sm:mb-2">
                Favorite Routes
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#6a7282]">
                Quick access to your most-used bus routes
              </p>
            </div>

            {/* Saved Routes Card */}
            <div className="w-full sm:w-auto lg:w-[300px] bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-pink-100 flex items-center gap-3">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-pink-500 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-[#6a7282]">Saved Routes</p>
                <p className="text-lg sm:text-xl font-bold text-[#2c084e]">
                  {favoriteCount} {favoriteCount === 1 ? "Route" : "Routes"}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards - Responsive */}
          {favoriteCount > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white text-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 opacity-90" />
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-1">{favoriteCount}</p>
                <p className="text-xs sm:text-sm opacity-90">Favorite Routes</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white text-center">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 opacity-90" />
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-1">{countAC}</p>
                <p className="text-xs sm:text-sm opacity-90">AC Routes</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl text-white text-center">
                <Bookmark className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 opacity-90" />
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-1">{countGreen}</p>
                <p className="text-xs sm:text-sm opacity-90">Green Routes</p>
              </div>
            </div>
          )}
        </div>

        {/* Favorite Routes List - Responsive Grid */}
        {favoriteCount > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {favorites.map((route) => {
              const isExpanded = expandedCard === route.id

              return (
                <div
                  key={route.id}
                  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border-2 border-purple-50 hover:shadow-2xl hover:border-purple-100 transition-all cursor-pointer"
                  onClick={() => setExpandedCard(isExpanded ? null : route.id)}
                >
                  {/* Bus Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-lg flex-shrink-0">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-[#1e2939] truncate">
                          {route.busNumber}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4a5565] truncate">
                          {route.source} → {route.destination}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {route.busType && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            route.busType?.toLowerCase() === "ac"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {route.busType}
                        </span>
                      )}
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Buttons */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/live-tracking/${route.id}`)
                        }}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 sm:px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all text-xs sm:text-sm font-medium whitespace-nowrap"
                      >
                        <Navigation className="w-4 h-4" /> Track Live
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate("/timetables")
                          toast.success("Opening bus schedules...")
                        }}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-3 sm:px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all text-xs sm:text-sm font-medium whitespace-nowrap"
                      >
                        <Clock className="w-4 h-4" /> Schedule
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRemove(route.id)
                        }}
                        className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-3 sm:px-4 py-2 rounded-full hover:bg-red-100 hover:shadow-md transition-all text-xs sm:text-sm font-medium whitespace-nowrap"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl text-center border-2 border-purple-50">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-[#6412b4]" />
            </div>
            <h2 className="text-[#2c084e] mb-2 sm:mb-3 text-lg sm:text-2xl font-bold">No Favorites Yet</h2>
            <p className="text-[#6a7282] mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-base">
              Start adding your frequently used bus routes to favorites for quick and easy access
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate("/search")}
                className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 transition-all font-medium text-sm sm:text-base"
              >
                Browse Routes
              </button>
              <button
                onClick={() => navigate("/timetables")}
                className="bg-white border-2 border-[#6412b4] text-[#6412b4] px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-purple-50 transition-all font-medium text-sm sm:text-base"
              >
                View Timetables
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}