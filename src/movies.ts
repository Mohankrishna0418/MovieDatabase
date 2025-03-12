type Movie = {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
}

let movies: Movie[] = [];

export function addMovie(id: number, title: string, director: string, releaseYear: number, genre: string) {
  if (movies.some(movie => movie.id === id)) {
    throw new Error("Movie with this ID already exists");
  }
  movies.push({ id, title, director, releaseYear, genre, ratings: [] });
}

export function rateMovie(id:number, rating: number) {
  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }
  const movie = movies.find(movie => movie.id === id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  movie.ratings.push(rating);
}

export function getAverageRating(id: number) {
  console.log("Average Rating:");  
  const movie = movies.find(movie => movie.id === id);
  if (!movie || movie.ratings.length === 0) {
    return undefined;
  }
  const sum = movie.ratings.reduce((a, b) => a + b, 0);
  return sum / movie.ratings.length;
}

export function getTopRatedMovies() {
  console.log("Top Rated Movies:");  
  return movies.filter(movie => getAverageRating(movie.id) === 5);
} 

export function getMoviesByGenre(genre: string) {
  console.log("Movies by Genre:");  
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
}

export function getMoviesByDirector(director: string) {
  console.log("Movies by Director:");  
  return movies.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
}

export function searchMoviesBasedOnKeyword(keyword: string) {
  console.log("Movies based on keyword:");  
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function getMovie(id: number) {
  console.log("The movie is:");
  return movies.find(movie => movie.id === id);
}

export function removeMovie(id: number) {
  console.log("The Movie is removed:");  
  movies = movies.filter(movie => movie.id !== id);
}
