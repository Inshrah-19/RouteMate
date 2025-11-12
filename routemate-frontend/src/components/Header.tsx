import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Clock, Map, Heart, ChevronDown, User, Settings, HelpCircle, LogOut, UserCircle } from 'lucide-react';
import { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '../App';
import imgLogo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const context = useContext(AppContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    context?.setUser(null);
    context?.setIsGuest(false);
    setShowProfileMenu(false);
  };

  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate('/signin');
  };

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b-2 border-white/60 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition-transform bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center p-2">
              <img src={imgLogo} alt="RouteMate Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-[28px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#6412b4] to-[#9333ea]">
                RouteMate
              </h1>
              <p className="text-[14px] text-[#6a7282] leading-tight mt-1">Smart Transport Solution</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Link
              to="/home"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-[15px] font-medium ${
                isActive('/home') && location.pathname === '/home'
                  ? 'bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg shadow-purple-500/30'
                  : 'text-[#2c084e] hover:bg-purple-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/timetables"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-[15px] font-medium ${
                isActive('/timetables')
                  ? 'bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg shadow-purple-500/30'
                  : 'text-[#2c084e] hover:bg-purple-50'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>Timetables</span>
            </Link>

            <Link
              to="/live-tracking"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-[15px] font-medium ${
                isActive('/live-tracking')
                  ? 'bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg shadow-purple-500/30'
                  : 'text-[#2c084e] hover:bg-purple-50'
              }`}
            >
              <Map className="w-5 h-5" />
              <span>Live Tracking</span>
            </Link>

            <Link
              to="/favorites"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-[15px] font-medium ${
                isActive('/favorites')
                  ? 'bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white shadow-lg shadow-purple-500/30'
                  : 'text-[#2c084e] hover:bg-purple-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${isActive('/favorites') ? 'fill-white' : ''}`} />
              <span>Favorites</span>
            </Link>
          </nav>

          {/* Profile / Auth */}
          {context?.user || context?.isGuest ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-purple-50 transition-all border-2 border-transparent hover:border-purple-200"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-[14px] font-semibold text-[#2c084e] leading-none">{context?.user?.name || 'Guest'}</p>
                  <p className="text-[12px] text-[#6a7282] leading-tight mt-0.5">
                    {context?.user?.isAdmin ? 'Admin' : 'User'}
                  </p>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#6a7282] transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl py-2 z-50 border-2 border-purple-100 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-6 py-4 border-b border-gray-100">
                    <p className="text-[16px] font-semibold text-[#2c084e]">{context?.user?.name || 'Guest User'}</p>
                    <p className="text-[14px] text-[#6a7282] mt-1">{context?.user?.email || 'guest@routemate.com'}</p>
                  </div>

                  <Link
                    to="/settings"
                    className="flex items-center gap-4 px-6 py-3 text-[#1e2939] hover:bg-purple-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <UserCircle className="w-5 h-5 text-[#6412b4]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium">Profile</p>
                      <p className="text-[12px] text-[#6a7282]">View and edit profile</p>
                    </div>
                  </Link>

                  <Link
                    to="/settings"
                    className="flex items-center gap-4 px-6 py-3 text-[#1e2939] hover:bg-purple-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-[#6412b4]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium">Settings</p>
                      <p className="text-[12px] text-[#6a7282]">Preferences & privacy</p>
                    </div>
                  </Link>

                  <Link
                    to="/help"
                    className="flex items-center gap-4 px-6 py-3 text-[#1e2939] hover:bg-purple-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[#6412b4]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium">Help & Support</p>
                      <p className="text-[12px] text-[#6a7282]">Get assistance</p>
                    </div>
                  </Link>

                  {context?.user?.isAdmin && (
                    <Link
                      to="/admin"
                      className="flex items-center gap-4 px-6 py-3 text-[#1e2939] hover:bg-purple-50 transition-colors border-t border-gray-100 mt-2 pt-4"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-[#6412b4]" />
                      </div>
                      <div>
                        <p className="text-[15px] font-medium">Admin Panel</p>
                        <p className="text-[12px] text-[#6a7282]">Manage system</p>
                      </div>
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-6 py-3 text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 mt-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <LogOut className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[15px] font-medium">Logout</p>
                      <p className="text-[12px] text-red-400">Sign out of account</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleAuthClick}
              className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all text-[15px] font-semibold"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
