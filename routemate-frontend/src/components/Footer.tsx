import { Link } from 'react-router-dom';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import imgLogo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#2c084e] to-[#6412b4] text-white mt-auto">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-white to-purple-100 flex items-center justify-center p-2.5">
                <img src={imgLogo} alt="RouteMate Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-white text-[32px] font-bold leading-none mb-1">RouteMate</h2>
                <p className="text-[#e0c7f0] text-[15px] font-medium">Smart Transport Solution</p>
              </div>
            </div>
            <p className="text-[#e0c7f0] text-[15px] mb-6 leading-relaxed">
              Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey,
              and never miss a ride with our smart transportation solution.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#e0c7f0] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-[#c9b3e3]">Call us</p>
                  <p className="text-sm">1-800-ROUTEMATE</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#e0c7f0] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-[#c9b3e3]">Email us</p>
                  <p className="text-sm">support@routemate.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#e0c7f0] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-[#c9b3e3]">Visit us</p>
                  <p className="text-sm">City Transit Center, Downtown</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[20px] font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Home</span>
              </Link>
              <Link to="/timetables" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Bus Schedules</span>
              </Link>
              <Link to="/live-tracking" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Live Tracking</span>
              </Link>
              <Link to="/favorites" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>My Favorites</span>
              </Link>
              <Link to="/help" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Help & Support</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-[20px] font-bold mb-6">Services</h3>
            <div className="space-y-3">
              <Link to="/search" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Route Planning</span>
              </Link>
              <Link to="/timetables" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Time Tables</span>
              </Link>
              <Link to="/live-tracking" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Real-time Updates</span>
              </Link>
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Mobile App</span>
              </Link>
              <Link to="/admin" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Admin Access</span>
              </Link>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-white text-[20px] font-bold mb-6">Legal</h3>
            <div className="space-y-3 mb-6">
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Privacy Policy</span>
              </Link>
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Terms of Service</span>
              </Link>
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Cookie Policy</span>
              </Link>
              <Link to="/home" className="flex items-center gap-2 text-[#e0c7f0] hover:text-white hover:translate-x-1 transition-all group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Accessibility</span>
              </Link>
            </div>

            <h4 className="text-white text-[16px] font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 hover:scale-110 transition-all shadow-lg">
                <Facebook className="w-6 h-6 text-black" />
              </button>
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 hover:scale-110 transition-all shadow-lg">
                <Twitter className="w-6 h-6 text-black" />
              </button>
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 hover:scale-110 transition-all shadow-lg">
                <Instagram className="w-6 h-6 text-black" />
              </button>
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 hover:scale-110 transition-all shadow-lg">
                <Linkedin className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-center justify-center gap-2 mb-8 text-[#e0c7f0]">
          <Clock className="w-5 h-5" />
          <p>Operating Hours: 24/7 | Customer Support: Mon-Fri 9AM-6PM</p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#e0c7f0] text-center md:text-left">
            © {currentYear} RouteMate. All rights reserved. Made with ❤️ for smart transportation.
          </p>
          <div className="flex gap-6">
            <Link to="/home" className="text-[#e0c7f0] hover:text-white transition-colors text-sm">
              About Us
            </Link>
            <Link to="/home" className="text-[#e0c7f0] hover:text-white transition-colors text-sm">
              Careers
            </Link>
            <Link to="/help" className="text-[#e0c7f0] hover:text-white transition-colors text-sm">
              Contact
            </Link>
            <Link to="/home" className="text-[#e0c7f0] hover:text-white transition-colors text-sm">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
