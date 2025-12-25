"use client";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { authAPI } from "./services/api";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import BusTimetables from "./pages/BusTimetables";
import LiveTracking from "./pages/LiveTracking";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import AdminDashboard from "./pages/AdminDashboard";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AuthModal from "./components/AuthModal";
import NotificationManager from "./components/NotificationManager";
import { Toaster } from "./components/ui/sonner";

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

export interface BusRoute {
  id: string;
  busNumber: string;
  from: string;
  to: string;
  frequency: string;
  nextArrival: string;
  type?: "AC" | "Green" | "Regular";
}

export interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  favorites: BusRoute[];
  addFavorite: (route: BusRoute) => void;
  removeFavorite: (routeId: string) => void;
  isFavorite: (routeId: string) => boolean;
  isGuest: boolean;
  setIsGuest: (isGuest: boolean) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  authMode: "signin" | "signup";
  setAuthMode: (mode: "signin" | "signup") => void;
  loading: boolean;
}

export const AppContext = React.createContext<AppContextType | null>(null);

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<BusRoute[]>([
    {
      id: "1",
      busNumber: "Bus 51",
      from: "Central Station",
      to: "Airport",
      frequency: "Every 15 mins",
      nextArrival: "2:30 PM",
      type: "Regular",
    },
    {
      id: "2",
      busNumber: "Thatta Bus",
      from: "Mall road",
      to: "University",
      frequency: "Every 15 mins",
      nextArrival: "4:30 PM",
      type: "AC",
    },
    {
      id: "3",
      busNumber: "Bus 55(back)",
      from: "Tech park",
      to: "Shopping centre",
      frequency: "Every 15 mins",
      nextArrival: "9:30 PM",
      type: "Green",
    },
    {
      id: "4",
      busNumber: "Bus 51(Return)",
      from: "Downtown",
      to: "Hospital",
      frequency: "Every 15 mins",
      nextArrival: "1:30 AM",
      type: "AC",
    },
  ]);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const storedUser = sessionStorage.getItem("user");

        if (token && storedUser) {
          try {
            const currentUser = await authAPI.getCurrentUser(token);

            setUser({
              id: String(currentUser.id),
              name: currentUser.fullName,
              email: currentUser.email,
              isAdmin: currentUser.role === "admin",
            });
          } catch (error) {
            console.error("Token validation failed, clearing session");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Error initializing session:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, []);

  const addFavorite = (route: BusRoute) => {
    setFavorites((prev) => [...prev, route]);
  };

  const removeFavorite = (routeId: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== routeId));
  };

  const isFavorite = (routeId: string) => {
    return favorites.some((f) => f.id === routeId);
  };

  const isAuthenticated = user !== null || isGuest;

  const contextValue: AppContextType = {
    user,
    setUser,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    isGuest,
    setIsGuest,
    showAuthModal,
    setShowAuthModal,
    authMode,
    setAuthMode,
    loading,
  };

  // Don't render routes until session initialization is complete
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-purple-600 border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/search"
              element={isAuthenticated ? <SearchResults /> : <HomePage />}
            />
            <Route
              path="/timetables/*"
              element={isAuthenticated ? <BusTimetables /> : <HomePage />}
            />
            <Route
              path="/live-tracking/:busId?"
              element={isAuthenticated ? <LiveTracking /> : <HomePage />}
            />
            <Route
              path="/favorites"
              element={isAuthenticated ? <Favorites /> : <HomePage />}
            />
            <Route
              path="/settings"
              element={isAuthenticated ? <Settings /> : <HomePage />}
            />
            <Route
              path="/help"
              element={isAuthenticated ? <HelpAndSupport /> : <HomePage />}
            />
            <Route
              path="/admin/*"
              element={
                isAuthenticated && user?.isAdmin ? (
                  <AdminDashboard />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          <AuthModal />
          <NotificationManager />
          <Toaster />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
