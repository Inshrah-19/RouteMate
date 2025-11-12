import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Navigation, Clock, Radio, RefreshCw } from 'lucide-react';

export default function LiveTracking() {
  const { busId } = useParams();
  const [, setBusPosition] = useState({ lat: 40.7128, lng: -74.0060 });

  // Simulate bus movement every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBusPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const busInfo = {
    number: busId ? `Bus ${busId}` : 'Bus 12A',
    route: 'Central Station → Airport',
    currentLocation: 'Mall Road Junction',
    nextStop: 'University Gate',
    eta: '5 mins',
    stopsRemaining: 8,
    progress: 65,
    speed: '45 km/h',
    passengers: '28/40'
  };

  const upcomingStops = [
    { name: 'University Gate', time: '5 mins', status: 'next', passengers: 5 },
    { name: 'Tech Park', time: '12 mins', status: 'upcoming', passengers: 8 },
    { name: 'Shopping Mall', time: '18 mins', status: 'upcoming', passengers: 12 },
    { name: 'Hospital', time: '25 mins', status: 'upcoming', passengers: 3 },
    { name: 'Airport', time: '35 mins', status: 'destination', passengers: 0 }
  ];

  const stopMarkers = [
    { name: 'Central Station', lat: 40.7128, lng: -74.0060, passed: true },
    { name: 'City Center', lat: 40.7148, lng: -74.0040, passed: true },
    { name: 'Mall Road', lat: 40.7168, lng: -74.0020, current: true },
    { name: 'University', lat: 40.7188, lng: -74.0000, upcoming: true },
    { name: 'Tech Park', lat: 40.7208, lng: -73.9980, upcoming: true },
    { name: 'Airport', lat: 40.7228, lng: -73.9960, upcoming: true }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-2">Live Bus Tracking</h1>
              <p className="text-[18px] text-[#6a7282]">Track your bus in real-time with accurate GPS locations</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Radio className="w-8 h-8 text-green-600 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-[14px] text-[#6a7282]">Status</p>
                  <p className="text-[16px] font-bold text-green-600">Live Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Map Container */}
              <div className="relative h-[600px] bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#e7f3ff]">
                {/* Street Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6412b4" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Main Route Path */}
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
                    style={{
                      left: `${15 + idx * 14}%`,
                      top: `${85 - idx * 13}%`
                    }}
                  >
                    {/* Stop Circle */}
                    <div className={`w-6 h-6 rounded-full border-4 shadow-lg ${
                      stop.passed 
                        ? 'bg-[#6412b4] border-[#6412b4]' 
                        : stop.current
                        ? 'bg-white border-[#6412b4] animate-pulse'
                        : 'bg-white border-gray-300'
                    }`} />
                    
                    {/* Stop Label */}
                    <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-md text-xs ${
                      stop.current ? 'border-2 border-[#6412b4]' : 'border border-gray-200'
                    }`}>
                      {stop.name}
                    </div>
                  </div>
                ))}

                {/* Moving Bus Icon */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{ left: '43%', top: '50%' }}
                >
                  <div className="relative">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 -m-4">
                      <div className="w-24 h-24 bg-[#6412b4] rounded-full animate-ping opacity-20" />
                    </div>
                    <div className="absolute inset-0 -m-2">
                      <div className="w-20 h-20 bg-[#6412b4] rounded-full animate-pulse opacity-30" />
                    </div>

                    {/* Bus Container */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#6412b4] to-[#9333ea] rounded-2xl flex items-center justify-center shadow-2xl z-10 border-4 border-white">
                      <Navigation className="w-8 h-8 text-white transform rotate-45" />
                    </div>

                    {/* Speed Badge */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-[#6412b4] whitespace-nowrap">
                      <p className="text-xs text-[#6412b4]">{busInfo.speed}</p>
                    </div>
                  </div>
                </div>

                {/* Info Banner - Top Left */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[#6412b4] to-[#9333ea] rounded-2xl p-4 shadow-xl text-white max-w-xs">
                  <p className="text-sm mb-1">Next Stop</p>
                  <p className="text-lg">{busInfo.nextStop}</p>
                  <p className="text-sm opacity-80">Arriving in {busInfo.eta}</p>
                </div>

                {/* Map Legend - Bottom Right */}
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <h4 className="text-sm text-[#2c084e] mb-3">Map Legend</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#6412b4] rounded-full border-2 border-[#6412b4]" />
                      <span className="text-xs text-[#4a5565]">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white border-2 border-[#6412b4] rounded-full animate-pulse" />
                      <span className="text-xs text-[#4a5565]">Current</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full" />
                      <span className="text-xs text-[#4a5565]">Upcoming</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-[#6412b4]" />
                      <span className="text-xs text-[#4a5565]">Live Bus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Badge - Outside Map Frame */}
            <div className="bg-[#299dd3] rounded-2xl px-6 py-3 shadow-xl w-fit">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
                <p className="text-white font-semibold">Updates every 5 seconds</p>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Bus Status Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-white">
              <h3 className="text-[#2c084e] mb-4">Bus Status</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f7eeff] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#6412b4]" />
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm">Current Location</p>
                    <p className="text-[#1e2939]">{busInfo.currentLocation}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f7eeff] rounded-full flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-[#6412b4]" />
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm">Next Stop</p>
                    <p className="text-[#1e2939]">{busInfo.nextStop}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f7eeff] rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#6412b4]" />
                  </div>
                  <div>
                    <p className="text-[#6a7282] text-sm">ETA</p>
                    <p className="text-[#1e2939]">{busInfo.eta}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[#6a7282] text-sm">Speed</p>
                      <p className="text-[#1e2939]">{busInfo.speed}</p>
                    </div>
                    <div>
                      <p className="text-[#6a7282] text-sm">Occupancy</p>
                      <p className="text-[#1e2939]">{busInfo.passengers}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#6a7282]">{busInfo.stopsRemaining} stops remaining</span>
                  <span className="text-[#6412b4]">{busInfo.progress}%</span>
                </div>
                <div className="w-full bg-[#f7eeff] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] h-3 rounded-full transition-all shadow-lg"
                    style={{ width: `${busInfo.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Upcoming Stops */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-white">
              <h3 className="text-[#2c084e] mb-4">Upcoming Stops</h3>

              <div className="space-y-3">
                {upcomingStops.map((stop, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      stop.status === 'next' 
                        ? 'bg-[#f7eeff] border-[#6412b4]' 
                        : 'bg-gray-50 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          stop.status === 'next'
                            ? 'bg-[#6412b4] animate-pulse'
                            : stop.status === 'destination'
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                      <div>
                        <p className="text-[#1e2939]">{stop.name}</p>
                        {stop.passengers > 0 && (
                          <p className="text-xs text-[#6a7282]">{stop.passengers} waiting</p>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm ${stop.status === 'next' ? 'text-[#6412b4]' : 'text-[#6a7282]'}`}>
                      {stop.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
