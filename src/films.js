// Exercise 1: Get the array of all directors.

const movies = require("./data");

// Fem servir el métode map per treure un array amb tots els directors
function getAllDirectors(array) {
  return array.map(movies => movies.director);
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  return array.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {
  const result = getMoviesFromDirector(array, director);
  let showScore = result.reduce(function(acc, curr) {
      return {
          score: acc.score + curr.score
      };
  }, { score: 0 });
  let average = Number((showScore.score / result.length).toFixed(2));
  return average;
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(array) {
  let arrangedFilms = [...array].sort(function(a, b) {
      if (a.title > b.title) {
          return 1;
      }
      if (a.title < b.title) {
          return -1;
      }
      return 0;
  });
  const x = 20;
  let ordered = arrangedFilms.slice(0, x)
  return ordered.map(film => film.title)
}

// Exercise 5: Order by year, ascending

function orderByYear(array) {
  let orderedByYear = [...array].sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
  return orderedByYear
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, category) {
  let result = array.filter((movie) =>
      movie.genre.includes(category)
  );
  let showScore = result.reduce(function(acc, curr) {
      return {
          score: acc.score + curr.score
      };
  }, { score: 0 });
  let numberOfMoviesWithScore = result.filter(movie => movie.score).length
  let media = (showScore.score / numberOfMoviesWithScore);
  return media;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = [];
  array.forEach(function (movie) {
    let newDuration = 
      Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60 +
      (movie.duration.indexOf('min') === -1 ? 0  
          : Number(movie.duration.slice(movie.duration.indexOf('min') - 2,
          movie.duration.indexOf('min')
            )
          ));
          result.push({...movie,duration:newDuration});
  });
  
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let movies = array.filter((film) => film.year == year);

  let result = movies.reduce((a, b) =>
    a.score > b.score ? a : a.score < b.score ? b : b
  );
  return [result];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
