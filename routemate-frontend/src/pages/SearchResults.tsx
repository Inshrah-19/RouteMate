import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Navigation, Filter, ChevronDown, Clock, MapPin, TrendingUp, Loader2 } from 'lucide-react';
import { AppContext } from '../App';
import { toast } from 'sonner';
import { routeAPI, busAPI, favoritesAPI } from '../services/api';

// Utility function for fuzzy matching using Levenshtein distance
function levenshteinDistance(str1: string, str2: string): number {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  const len1 = s1.length;
  const len2 = s2.length;
  const matrix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));

  for (let i = 0; i <= len1; i++) matrix[i][0] = i;
  for (let j = 0; j <= len2; j++) matrix[0][j] = j;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[len1][len2];
}

function fuzzyMatch(searchStr: string, targetStr: string): number {
  const search = searchStr.toLowerCase().trim();
  const target = targetStr.toLowerCase().trim();
  
  if (target === search) return 100;
  if (target.includes(search)) return 90;
  if (search.includes(target)) return 75;
  
  const maxLen = Math.max(search.length, target.length);
  const distance = levenshteinDistance(search, target);
  const similarity = ((maxLen - distance) / maxLen) * 100;
  
  return Math.max(0, similarity);
}

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const context = useContext(AppContext);
  
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'time');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [buses, setBuses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const from = searchParams.get('from') || 'Central Station';
  const to = searchParams.get('to') || 'Airport';

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const allBuses = await busAPI.getAllBuses();
        const allRoutes = await routeAPI.getAllRoutes();
        
        const matchedBuses = allBuses
          .map((bus: any) => {
            const route = allRoutes.find((r: any) => r.id === bus.routeId);
            if (!route) return null;
            
            const sourceMatch = fuzzyMatch(from, route.source);
            const destMatch = fuzzyMatch(to, route.destination);
            const totalScore = (sourceMatch + destMatch) / 2;
            
            // Include buses with at least 40% match score
            if (totalScore < 40) return null;
            
            return {
              id: bus.id,
              busNumber: bus.busNumber,
              from: route.source,
              to: route.destination,
              type: bus.busType,
              status: 'On-time',
              nextArrival: bus.departureTime,
              progress: Math.floor(Math.random() * 80) + 20,
              stops: `${Math.floor(Math.random() * 8) + 3} stops remaining`,
              fare: bus.fare,
              routeId: bus.routeId,
              matchScore: totalScore,
            };
          })
          .filter(Boolean)
          .sort((a: any, b: any) => b.matchScore - a.matchScore);
        
        setBuses(matchedBuses);
        if (matchedBuses.length === 0) {
          setError('No buses found for this route. Try searching for nearby locations.');
        }
      } catch (err: any) {
        console.error('Error fetching buses:', err);
        setError(err.message || 'Failed to load buses');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBuses();
  }, [from, to]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredBuses = buses
    .filter(bus => {
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'ac') return bus.type === 'AC';
      if (selectedFilter === 'green') return bus.type === 'Green';
      if (selectedFilter === 'non-ac') return bus.type === 'Non-AC';
      if (selectedFilter === 'ontime') return bus.status === 'On-time';
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'time') {
        return a.nextArrival.localeCompare(b.nextArrival);
      } else if (sortBy === 'progress') {
        return b.progress - a.progress;
      } else if (sortBy === 'stops') {
        return parseInt(a.stops) - parseInt(b.stops);
      }
      return 0;
    });

  const sortOptions = [
    { id: 'time', label: 'Sort by Time', icon: Clock },
    { id: 'progress', label: 'Sort by Distance', icon: MapPin },
    { id: 'stops', label: 'Sort by Stops', icon: TrendingUp }
  ];

  const handleToggleFavorite = async (bus: any) => {
    if (!context?.user) {
      toast.error('Please sign in to add favorites');
      return;
    }

    try {
      if (context?.isFavorite(bus.id)) {
        context?.removeFavorite(bus.id);
        toast.success('Removed from favorites');
      } else {
        const token = sessionStorage.getItem('token');  // Use sessionStorage like api.ts expects
        if (token) {
          await favoritesAPI.addFavorite(bus.routeId, token);
        }
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
    } catch (err) {
      toast.error('Failed to update favorites');
    }
  };

  const filters = [
    { id: 'all', label: 'All Routes' },
    { id: 'ac', label: 'AC Only' },
    { id: 'green', label: 'Green Bus' },
    { id: 'non-ac', label: 'Non-AC' },
    { id: 'ontime', label: 'On-time Only' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-10 w-full">
        <div className="mb-8">
          <div>
            <h1 className="text-[#2c084e] text-4xl sm:text-5xl font-bold mb-2 text-balance">
              Search Results
            </h1>
            <p className="text-[#4a5565] text-lg sm:text-xl font-semibold">
              {from} → {to}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-[#6412b4] animate-spin mx-auto mb-4" />
              <p className="text-[#6a7282] text-[16px]">Loading available buses...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center mb-8">
            <p className="text-red-600 text-[16px] font-medium">{error}</p>
            <button
              onClick={() => navigate('/home')}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              Back to Home
            </button>
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-5 h-5 text-[#6412b4]" />
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-4 sm:px-6 py-2 rounded-full transition-all text-[13px] sm:text-[15px] font-medium whitespace-nowrap ${
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
              <div className="relative w-full sm:w-auto" ref={sortDropdownRef}>
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="w-full sm:w-auto flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-purple-200 rounded-full hover:bg-purple-50 transition-all text-[15px] font-medium text-[#2c084e]"
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

            {/* Bus Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {filteredBuses.map(bus => (
                <div key={bus.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <button
                        onClick={() => handleToggleFavorite(bus)}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
                          context?.isFavorite(bus.id)
                            ? 'bg-gradient-to-b from-[#6412b4] to-[#2c084e]'
                            : 'bg-[#f7eeff] hover:bg-purple-100'
                        }`}
                      >
                        <Heart
                          className={`w-6 h-6 ${context?.isFavorite(bus.id) ? 'fill-white text-white' : 'text-[#6412b4]'}`}
                        />
                      </button>

                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-[#1e2939] font-bold text-[18px]">{bus.busNumber}</h3>
                          {bus.type !== 'Non-AC' && (
                            <span className="bg-[#4ecdc4] text-white px-3 py-1 rounded-full text-xs font-medium">
                              {bus.type}
                            </span>
                          )}
                        </div>
                        <p className="text-[#4a5565] text-[14px]">
                          {bus.from} → {bus.to}
                        </p>
                      </div>
                    </div>

                    <div className="text-right ml-4">
                      <p className="text-[#6a7282] text-sm">Next arrival</p>
                      <p className="text-[#1e2939] font-bold">{bus.nextArrival}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#6a7282]">{bus.stops}</span>
                      <span className={bus.status === 'On-time' ? 'text-green-600 font-medium' : 'text-orange-600 font-medium'}>
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
                      className="flex-1 bg-white border-2 border-[#008236] text-[#008236] py-3 rounded-xl hover:bg-[#008236] hover:text-white transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      Track
                    </button>

                    <button className="flex-1 bg-[rgba(48,4,49,0.92)] text-white py-3 rounded-xl hover:bg-[#2c084e] transition-all font-medium">
                      Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredBuses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#6a7282] text-[18px]">No buses found matching your criteria</p>
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="mt-4 px-6 py-2 bg-[#6412b4] text-white rounded-lg hover:bg-[#2c084e] transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
