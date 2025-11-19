import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Clock,
  Map,
  Heart,
  User,
  Menu,
  ArrowLeft,
  Settings,
  HelpCircle,
  LogOut,
  UserCircle,
} from "lucide-react";
import { AppContext } from "../App";

// Import dropdown components if they exist, otherwise create simple alternatives
function DropdownItem({
  icon,
  title,
  subtitle,
  onClick,
  textColor = "text-[#1e2939]",
  bgHover = "hover:bg-purple-50",
  iconBg = "bg-purple-100",
  withDivider = false,
}: any) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`flex items-center gap-4 px-6 py-3 ${textColor} ${bgHover} transition-colors w-full text-left ${
        withDivider ? "border-t border-gray-100 mt-2 pt-4" : ""
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[15px] font-medium">{title}</p>
        {subtitle && <p className="text-[12px] text-[#6a7282]">{subtitle}</p>}
      </div>
    </button>
  );
}

function ProfileDropdown({ navigate, handleLogout, user, closeMenu }: any) {
  return (
    <>
      <DropdownItem
        icon={<UserCircle className="w-5 h-5 text-[#6412b4]" />}
        title="Profile"
        subtitle="View and edit profile"
        onClick={() => {
          navigate("/settings");
          closeMenu();
        }}
      />
      <DropdownItem
        icon={<Settings className="w-5 h-5 text-[#6412b4]" />}
        title="Settings"
        subtitle="Preferences & privacy"
        onClick={() => {
          navigate("/settings");
          closeMenu();
        }}
      />
      <DropdownItem
        icon={<HelpCircle className="w-5 h-5 text-[#6412b4]" />}
        title="Help & Support"
        subtitle="Get assistance"
        onClick={() => {
          navigate("/help");
          closeMenu();
        }}
      />
      {user?.isAdmin && (
        <DropdownItem
          icon={<Settings className="w-5 h-5 text-[#6412b4]" />}
          title="Admin Panel"
          subtitle="Manage system"
          onClick={() => {
            navigate("/admin");
            closeMenu();
          }}
          withDivider
        />
      )}
      <DropdownItem
        icon={<LogOut className="w-5 h-5" />}
        title="Logout"
        subtitle="Sign out of account"
        onClick={handleLogout}
        textColor="text-red-600"
        bgHover="hover:bg-red-50"
        iconBg="bg-red-100"
        withDivider
      />
    </>
  );
}

import imgLogo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (profileMenuRef.current && !profileMenuRef.current.contains(target)) {
        setShowProfileMenu(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path);

  const handleLogout = () => {
    context?.setUser?.(null);
    context?.setIsGuest?.(false);
    setShowProfileMenu(false);
    setMobileMenuOpen(false);
    navigate("/home");
  };

  const handleAuthClick = () => {
    setMobileMenuOpen(false);
    navigate("/signin");
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/timetables", icon: Clock, label: "Timetables" },
    { to: "/live-tracking", icon: Map, label: "Live Tracking" },
    { to: "/favorites", icon: Heart, label: "Favourites" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b-2 border-white/60 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 py-4 flex items-center justify-between">
        {/* Left: Back Button + Menu + Logo */}
        <div className="flex items-center gap-3 sm:gap-4 relative">
          {location.pathname !== "/home" && (
            <button
              onClick={handleGoBack}
              className="p-2 rounded-lg hover:bg-purple-100 transition-colors hover:scale-110 active:scale-95 
               absolute -bottom-8 left-0 sm:static"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c084e]" />
            </button>
          )}

          {/* Mobile Menu */}
          <div className="relative md:hidden">
            <button
              ref={mobileButtonRef}
              className="p-1.5 rounded-md hover:bg-purple-50 transition"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <Menu className="w-6 h-6 text-[#2c084e]" />
            </button>

            {mobileMenuOpen && (
              <div
                ref={mobileMenuRef}
                className="absolute left-full top-0 ml-2 w-64 bg-white rounded-3xl shadow-2xl py-2 border-2 border-purple-100 animate-in slide-in-from-left duration-200 z-50"
              >
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <DropdownItem
                      key={index}
                      icon={<Icon className="w-5 h-5 text-[#6412b4]" />}
                      title={item.label}
                      onClick={() => {
                        navigate(item.to);
                        setMobileMenuOpen(false);
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Logo + Title */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <img
              src={imgLogo}
              alt="RouteMate Logo"
              className="h-10 w-auto object-contain scale-150 mr-4"
              style={{ transformOrigin: "center" }}
            />

            <div className="flex flex-col">
              <h1 className="text-[23px] sm:text-[26px] font-bold leading-none text-[#2c084e]">
                RouteMate
              </h1>
              <p className="text-[11px] sm:text-[13px] text-[#6a7282] leading-tight mt-0.5">
                Smart Transport Solution
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 ml-4">
          {navItems.map((item) => {
            const active = isActive(item.to);
            const Icon = item.icon;
            return (
              <button
                key={item.to}
                onClick={() => navigate(item.to)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-[15px] font-medium ${
                  active
                    ? "bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg shadow-purple-500/30"
                    : "text-[#2c084e] hover:bg-purple-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    active ? "text-white" : "text-[#6412b4]"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side: Profile / Sign In */}
        <div className="flex items-center gap-2">
          {context?.user || context?.isGuest ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu((prev) => !prev)}
                className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-purple-50 transition-all border-2 border-transparent hover:border-purple-200"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[14px] font-semibold text-[#2c084e] leading-none truncate">
                    {(context?.user as any)?.name || "Guest"}
                  </p>
                  <p className="text-[12px] text-[#6a7282] leading-tight mt-0.5">
                    {(context?.user as any)?.isAdmin ? "Admin" : "User"}
                  </p>
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl py-2 border-2 border-purple-100 animate-in slide-in-from-top-2 duration-200 z-40">
                  <ProfileDropdown
                    navigate={navigate}
                    handleLogout={handleLogout}
                    user={context?.user}
                    closeMenu={() => setShowProfileMenu(false)}
                  />
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleAuthClick}
              className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-xl transition-all text-[15px] font-semibold"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
