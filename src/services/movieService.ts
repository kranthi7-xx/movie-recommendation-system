
import { Movie } from '@/types/movie';

// Mock movie data for demonstration
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1489599510265-12c69b18c7c7?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
    year: 1994,
    rating: 9.3,
    genre: ["Drama"],
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    duration: 142
  },
  {
    id: 2,
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-b0e6b5b6c046?w=1200&h=600&fit=crop",
    year: 1972,
    rating: 9.2,
    genre: ["Crime", "Drama"],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    duration: 175
  },
  {
    id: 3,
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518930259200-4fdb143ac931?w=1200&h=600&fit=crop",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    duration: 154
  },
  {
    id: 4,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1531259683007-016a943d94cc?w=1200&h=600&fit=crop",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    duration: 148
  },
  {
    id: 5,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=600&fit=crop",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    synopsis: "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    duration: 152
  },
  {
    id: 6,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=1200&h=600&fit=crop",
    year: 2014,
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    duration: 169
  }
];

export const movieService = {
  async getMoviesByCategory(category: string): Promise<Movie[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let sortedMovies = [...mockMovies];
    
    switch (category) {
      case 'popular':
        sortedMovies = sortedMovies.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
        sortedMovies = sortedMovies.sort((a, b) => b.year - a.year);
        break;
      case 'trending':
        sortedMovies = sortedMovies.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }
    
    return sortedMovies;
  },

  async searchMovies(query: string): Promise<Movie[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
    );
  }
};
