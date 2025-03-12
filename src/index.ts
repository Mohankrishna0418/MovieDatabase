import { addMovie } from "./movies";
import { rateMovie } from "./movies";
import { getAverageRating } from "./movies";
import { getTopRatedMovies } from "./movies";
import { getMoviesByGenre } from "./movies";
import { getMoviesByDirector } from "./movies";
import { searchMoviesBasedOnKeyword } from "./movies";  
import { getMovie } from "./movies";
import { removeMovie } from "./movies";

const movie1 = addMovie(1, "The Shawshank Redemption", "Frank Darabont", 1994, "Drama");
const movie2 = addMovie(2, "The Godfather", "Francis Ford Coppola", 1972, "Crime");
const movie3 = addMovie(3, "The Dark Knight", "Christopher Nolan", 2008, "Action");
const movie4 = addMovie(4, "The Lord of the Rings", "Peter Jackson", 2003, "Adventure");
const movie5 = addMovie(5, "Pulp Fiction", "Quentin Tarantino", 1994, "Crime");

rateMovie(1, 5);
rateMovie(1, 4);
rateMovie(1, 5);  

rateMovie(2, 5);
rateMovie(2, 5);  
rateMovie(2, 4);

rateMovie(3, 5);
rateMovie(3, 5);
rateMovie(3, 5);

rateMovie(4, 5);
rateMovie(4, 5);
rateMovie(4, 5);

rateMovie(5, 5);
rateMovie(5, 5);
rateMovie(5, 5);


console.log(getAverageRating(1)); // 4.67
console.log(getAverageRating(2)); // 4.67
console.log(getAverageRating(3)); // 5
console.log(getAverageRating(4)); // 5  
console.log(getAverageRating(5)); // 5

console.log(getTopRatedMovies());

console.log(getMoviesByGenre("Crime"));
console.log(getMoviesByDirector("Christopher Nolan"));
console.log(searchMoviesBasedOnKeyword("the"));
//console.log(searchMoviesBasedOnKeyword("godfather"));

console.log(getMovie(1));
console.log(removeMovie(1));
console.log(getMovie(1));

