type Movie = {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
}

let movies: Movie[] = [] ;

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
  console.log("Average Rating of movie with ID:" + id);  
  const movie = movies.find(movie => movie.id === id);
  if (!movie || movie.ratings.length === 0) {
    return undefined;
  }
  const sum = movie.ratings.reduce((a, b) => a + b, 0);
  return sum / movie.ratings.length;
}

/* export function getTopRatedMovies() {
  console.log("Top Rated Movies:");  
  return movies
    .map(movie => ({
      ...movie,
      averageRating: getAverageRating(movie.id) || 0
    }))
    .sort((a, b) => b.averageRating - a.averageRating);
}  */

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
    const movie = movies.find(movie => movie.id === id);
    if (!movie) {
      console.log("Movie not found");
    }
    else{
        console.log("The movie is:", movie);
    }
  }
 
export function removeMovie(id: number) {  
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
        console.log("Movie not found");
        return;
    }
    const removedMovie = movies.splice(movieIndex, 1)[0];
    console.log("Movie removed:", removedMovie);
    }
