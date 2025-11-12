import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Navigation, Filter, ChevronDown, Clock, MapPin, TrendingUp } from 'lucide-react';
import { AppContext } from '../App';
import { toast } from 'sonner';

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const context = useContext(AppContext);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'time');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const from = searchParams.get('from') || 'Central Station';
  const to = searchParams.get('to') || 'Airport';

  const allBuses = [
    {
      id: '1',
      busNumber: 'Bus 12A',
      from: 'Central Station',
      to: 'Airport',
      type: 'Regular',
      status: 'On-time',
      nextArrival: '2:30 PM',
      progress: 65,
      stops: '8 stops remaining'
    },
    {
      id: '5',
      busNumber: 'Bus 34B',
      from: 'Central Station',
      to: 'Airport',
      type: 'AC',
      status: 'Delayed',
      nextArrival: '3:15 PM',
      progress: 40,
      stops: '12 stops remaining'
    },
    {
      id: '6',
      busNumber: 'Bus 56C',
      from: 'Central Station',
      to: 'Airport',
      type: 'Green',
      status: 'On-time',
      nextArrival: '4:00 PM',
      progress: 20,
      stops: '15 stops remaining'
    }
  ];

  const filteredBuses = allBuses
    .filter(bus => {
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'ac') return bus.type === 'AC';
      if (selectedFilter === 'green') return bus.type === 'Green';
      if (selectedFilter === 'ontime') return bus.status === 'On-time';
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'time') {
        // Sort by next arrival time
        return a.nextArrival.localeCompare(b.nextArrival);
      } else if (sortBy === 'progress') {
        // Sort by progress (closest buses first)
        return b.progress - a.progress;
      } else if (sortBy === 'stops') {
        // Sort by remaining stops
        return parseInt(a.stops) - parseInt(b.stops);
      }
      return 0;
    });

  const sortOptions = [
    { id: 'time', label: 'Sort by Time', icon: Clock },
    { id: 'progress', label: 'Sort by Distance', icon: MapPin },
    { id: 'stops', label: 'Sort by Stops', icon: TrendingUp }
  ];

  const handleToggleFavorite = (bus: any) => {
    if (context?.isFavorite(bus.id)) {
      context?.removeFavorite(bus.id);
      toast.success('Removed from favorites');
    } else {
      context?.addFavorite({
        id: bus.id,
        busNumber: bus.busNumber,
        from: bus.from,
        to: bus.to,
        frequency: 'Every 15 mins',
        nextArrival: bus.nextArrival,
        type: bus.type as any
      });
      toast.success('Added to favorites');
    }
  };

  const filters = [
    { id: 'all', label: 'All Routes' },
    { id: 'ac', label: 'AC Only' },
    { id: 'green', label: 'Green Bus' },
    { id: 'ontime', label: 'On-time Only' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-[#2c084e] mb-2">Search Results</h1>
          <p className="text-[#4a5565] text-xl">
            {from} → {to}
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#6412b4]" />
            <div className="flex gap-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-2 rounded-full transition-all text-[15px] font-medium ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#6412b4] to-[#2c084e] text-white shadow-lg'
                      : 'bg-white text-[#4a5565] hover:bg-[#f7eeff] border-2 border-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative" ref={sortDropdownRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-purple-200 rounded-full hover:bg-purple-50 transition-all text-[15px] font-medium text-[#2c084e]"
            >
              <TrendingUp className="w-5 h-5 text-[#6412b4]" />
              <span>{sortOptions.find(s => s.id === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 z-50 border-2 border-purple-100 animate-in slide-in-from-top-2 duration-200">
                {sortOptions.map(option => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                        sortBy === option.id
                          ? 'bg-purple-50 text-[#6412b4]'
                          : 'text-[#2c084e] hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-[15px] font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBuses.map(bus => (
            <div key={bus.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggleFavorite(bus)}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      context?.isFavorite(bus.id)
                        ? 'bg-gradient-to-b from-[#6412b4] to-[#2c084e]'
                        : 'bg-[#f7eeff]'
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${context?.isFavorite(bus.id) ? 'fill-white text-white' : 'text-[#6412b4]'}`}
                    />
                  </button>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#1e2939]">{bus.busNumber}</h3>
                      {bus.type !== 'Regular' && (
                        <span className="bg-[#4ecdc4] text-white px-3 py-1 rounded-full text-xs">
                          {bus.type}
                        </span>
                      )}
                    </div>
                    <p className="text-[#4a5565]">
                      {bus.from} → {bus.to}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[#6a7282] text-sm">Next arrival</p>
                  <p className="text-[#1e2939]">{bus.nextArrival}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#6a7282]">{bus.stops}</span>
                  <span className={bus.status === 'On-time' ? 'text-green-600' : 'text-orange-600'}>
                    {bus.status}
                  </span>
                </div>
                <div className="w-full bg-[#e7e1e6] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#6412b4] to-[#2c084e] h-2 rounded-full transition-all"
                    style={{ width: `${bus.progress}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/live-tracking/${bus.id}`)}
                  className="flex-1 bg-white border-2 border-[#008236] text-[#008236] py-3 rounded-xl hover:bg-[#008236] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Track
                </button>

                <button className="flex-1 bg-[rgba(48,4,49,0.92)] text-white py-3 rounded-xl hover:bg-[#2c084e] transition-all">
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBuses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6a7282] text-xl">No buses found matching your criteria</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
