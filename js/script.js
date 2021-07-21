const numbersOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

console.log(numbersOfFilms);

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

const text = "Hello world";

// console.log(text.slice(6, 10));

console.log(text.slice(-8, -1));

const num = "12.28px";

console.log(parseFloat(num));