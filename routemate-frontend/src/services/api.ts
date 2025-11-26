const API_BASE_URL = "https://backend-3rd-environment.up.railway.app/api"

// Helper function for making requests
const makeRequest = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any,
  token?: string,
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Something went wrong")
  }

  return response.json()
}

// Authentication APIs
export const authAPI = {
  signup: (data: { email: string; password: string; fullName: string; phone?: string }) =>
    makeRequest("/auth/signup", "POST", data),

  login: (data: { email: string; password: string }) => makeRequest("/auth/login", "POST", data),

  getCurrentUser: (token: string) => makeRequest("/auth/current-user", "GET", undefined, token),
}

// Route APIs
export const routeAPI = {
  getAllRoutes: () => makeRequest("/routes/all"),

  searchRoutes: (source: string, destination: string) =>
    makeRequest(`/routes/search?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}`),

  getRouteById: (routeId: number) => makeRequest(`/routes/${routeId}`),

  addRoute: (
    data: {
      routeName: string
      source: string
      destination: string
      operatingHours: string
    },
    token: string,
  ) => makeRequest("/routes/add", "POST", data, token),
}

// Bus APIs
export const busAPI = {
  getAllBuses: () => makeRequest("/buses/all"),

  getBusesByType: (busType: string) => makeRequest(`/buses/type/${busType}`),

  getBusesByRoute: (routeId: number) => makeRequest(`/buses/route/${routeId}`),

  addBus: (
    data: {
      busNumber: string
      busType: string
      driverName: string
      driverPhone?: string
      routeId: number
      departureTime: string
      arrivalTime: string
      fare: number
      totalSeats: number
    },
    token: string,
  ) => makeRequest("/buses/add", "POST", data, token),
}

// Feedback APIs
export const feedbackAPI = {
  submitFeedback: (data: { email: string; message: string }) => makeRequest("/feedback/submit", "POST", data),

  getAllFeedback: (token: string) => makeRequest("/feedback/all", "GET", undefined, token),
}

// Favorites API endpoints
export const favoritesAPI = {
  getFavorites: (token: string) => makeRequest("/favorites/user", "GET", undefined, token),

  addFavorite: (routeId: number, token: string) => makeRequest("/favorites/add", "POST", { routeId }, token),

  removeFavorite: (favoriteId: number, token: string) =>
    makeRequest(`/favorites/${favoriteId}`, "DELETE", undefined, token),
}

// LiveTracking API endpoint
export const trackingAPI = {
  getBusDetails: (busId: number) => makeRequest(`/buses/${busId}`),

  getBusByRoute: (routeId: number) => makeRequest(`/buses/route/${routeId}`),
}

// RouteStops API endpoints
export const stopsAPI = {
  getRouteStops: (routeId: number) => makeRequest(`/stops/route/${routeId}`),

  getAllStops: () => makeRequest("/stops/all"),
}
