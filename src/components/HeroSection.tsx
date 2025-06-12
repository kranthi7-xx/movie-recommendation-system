
import { Star, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1489599510265-12c69b18c7c7?w=1200&h=600&fit=crop')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}Favorite Movie
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Explore thousands of movies, get personalized recommendations, and find your perfect watch for tonight.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              Watch Trailer
            </button>
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-medium">9.3/10 Featured</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
