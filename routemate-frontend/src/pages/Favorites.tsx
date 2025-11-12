import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Navigation, Clock, Trash2, Star, Bookmark } from 'lucide-react';
import { AppContext } from '../App';
import { toast } from 'sonner';

export default function Favorites() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const handleRemove = (routeId: string) => {
    context?.removeFavorite(routeId);
    toast.success('Removed from favorites');
  };

  const favoriteCount = context?.favorites?.length || 0;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7eaff] from-[62.5%] to-[#948c99]">
      <Header />

      <main className="flex-1 max-w-[1400px] mx-auto px-8 py-12 w-full">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[40px] font-extrabold text-[#2c084e] mb-2">Favorite Routes</h1>
              <p className="text-[18px] text-[#6a7282]">Quick access to your most-used bus routes</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                <div>
                  <p className="text-[14px] text-[#6a7282]">Saved Routes</p>
                  <p className="text-[16px] font-bold text-[#2c084e]">{favoriteCount} {favoriteCount === 1 ? 'Route' : 'Routes'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          {context?.favorites && context.favorites.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 shadow-xl text-white">
                <Heart className="w-10 h-10 mb-3 opacity-80" />
                <p className="text-[28px] font-extrabold mb-1">{favoriteCount}</p>
                <p className="text-[14px] opacity-90">Favorite Routes</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl p-6 shadow-xl text-white">
                <Star className="w-10 h-10 mb-3 opacity-80" />
                <p className="text-[28px] font-extrabold mb-1">{context.favorites.filter(f => f.type === 'AC').length}</p>
                <p className="text-[14px] opacity-90">AC Routes</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-6 shadow-xl text-white">
                <Bookmark className="w-10 h-10 mb-3 opacity-80" />
                <p className="text-[28px] font-extrabold mb-1">{context.favorites.filter(f => f.type === 'Green').length}</p>
                <p className="text-[14px] opacity-90">Green Routes</p>
              </div>
            </div>
          )}
        </div>

        {context?.favorites && context.favorites.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {context.favorites.map(route => (
              <div key={route.id} className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-50 hover:shadow-2xl hover:border-purple-100 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6412b4] to-[#9333ea] flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white fill-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#1e2939]">{route.busNumber}</h3>
                      {route.type === 'AC' && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">AC</span>
                      )}
                      {route.type === 'Green' && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">Eco</span>
                      )}
                    </div>
                    <p className="text-[#4a5565] mb-1">
                      {route.from} → {route.to}
                    </p>
                    <p className="text-[#6a7282] text-sm">{route.frequency}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#6a7282] text-sm">Next arrival</p>
                    <p className="text-[#1e2939] font-semibold">{route.nextArrival}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/live-tracking/${route.id}`)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-2xl hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Track Live
                  </button>

                  <button 
                    onClick={() => {
                      navigate('/timetables');
                      toast.success('Opening bus schedules...');
                    }}
                    className="flex-1 bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-3 rounded-2xl hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                    <Clock className="w-4 h-4" />
                    Schedule
                  </button>

                  <button
                    onClick={() => handleRemove(route.id)}
                    className="bg-red-50 text-red-600 py-3 px-6 rounded-2xl hover:bg-red-100 hover:shadow-lg transition-all flex items-center gap-2 font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 shadow-xl text-center border-2 border-purple-50">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <Heart className="w-12 h-12 text-[#6412b4]" />
            </div>
            <h2 className="text-[#2c084e] mb-3 text-2xl">No Favorites Yet</h2>
            <p className="text-[#6a7282] mb-8 max-w-md mx-auto">
              Start adding your frequently used bus routes to favorites for quick and easy access
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate('/search')}
                className="bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 transition-all font-medium"
              >
                Browse Routes
              </button>
              <button
                onClick={() => navigate('/timetables')}
                className="bg-white border-2 border-[#6412b4] text-[#6412b4] px-8 py-3 rounded-xl hover:bg-purple-50 transition-all font-medium"
              >
                View Timetables
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
