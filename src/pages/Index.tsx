
import { useState, useEffect } from 'react';
import { MovieGrid } from '@/components/MovieGrid';
import { SearchBar } from '@/components/SearchBar';
import { CategoryTabs } from '@/components/CategoryTabs';
import { HeroSection } from '@/components/HeroSection';
import { MovieModal } from '@/components/MovieModal';
import { Movie } from '@/types/movie';
import { movieService } from '@/services/movieService';

const Index = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, [selectedCategory]);

  useEffect(() => {
    filterMovies();
  }, [movies, searchTerm]);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const movieData = await movieService.getMoviesByCategory(selectedCategory);
      setMovies(movieData);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
    setLoading(false);
  };

  const filterMovies = () => {
    if (!searchTerm) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredMovies(filtered);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <div className="mb-8">
          <CategoryTabs
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <MovieGrid
          movies={filteredMovies}
          loading={loading}
          onMovieSelect={handleMovieSelect}
        />
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Index;
