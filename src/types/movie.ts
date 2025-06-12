
export interface Movie {
  id: number;
  title: string;
  poster: string;
  backdrop: string;
  year: number;
  rating: number;
  genre: string[];
  synopsis: string;
  director: string;
  cast: string[];
  duration: number;
  trailer?: string;
}

export interface MovieCategory {
  id: string;
  name: string;
  description: string;
}
