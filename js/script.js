'use strict';

let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert( 'Просмотрена довольно мало фильмов' );
    } else if (personalMovieDB.count <= 30) {
        alert( 'Вы классический зритель' );
    } else if (personalMovieDB.count > 30) {
        alert( 'Вы киноман' );
    } else {
        alert( 'Произошла ошибка' );
    }
}

detectPersonalLevel();

console.log(numbersOfFilms);

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// let a,
//     b,
//     i = 0;

// while (i <= 1) {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', ''),
//     i++;
//     if (a == null || b == null) {
//         alert( 'Вы нажали отмену, повторите ввод!' );
//         i--;
//         continue;
//     } else if
//     (a == "" || b == "" || a.length >= 5 || b.length >= 5) {
//         alert( 'Вы ввели пустую строку или количество символов больше 5, повторите ввод!' );
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }
// };

// do {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//     i++;
//     if (a == null || b == null) {
//         alert( 'Вы нажали отмену, повторите ввод!' );
//         i--;
//         continue;
//     } else if
//     (a == "" || b == "" || a.length >= 5 || b.length >= 5) {
//         alert( 'Вы ввели пустую строку или количество символов больше 5, повторите ввод!' );
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }
// } while (i <= 1);


function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a == null || b == null) {
            alert( 'Вы нажали отмену, повторите ввод!' );
            i--;
            continue;
        } else if
        (a == "" || b == "" || a.length >= 5 || b.length >= 5) {
            alert( 'Вы ввели пустую строку или количество символов больше 5, повторите ввод!' );
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
    }
}

rememberMyFilms();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYouGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
