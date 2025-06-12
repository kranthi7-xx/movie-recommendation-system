
import { MovieCard } from './MovieCard';
import { MovieSkeleton } from './MovieSkeleton';
import { Movie } from '@/types/movie';

interface MovieGridProps {
  movies: Movie[];
  loading: boolean;
  onMovieSelect: (movie: Movie) => void;
}

export const MovieGrid = ({ movies, loading, onMovieSelect }: MovieGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-white mb-4">No movies found</h3>
        <p className="text-gray-400">Try adjusting your search or category filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onMovieSelect(movie)}
        />
      ))}
    </div>
  );
};
