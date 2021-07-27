'use strict'; /* ---стандарт ES5+ */

let numbersOfFilms; /* ---создаем перезаписываемую переменную */

/* создаем объект */
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    /* пишим функцию start, позже переписываем в метод */
    start: function() {
        /* ---задаем вопрос пользователю через встроенную функцию prompt */
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        /* используем цикл while с несколькими условиями через операторы && - и, || - или */
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i <= 1; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a == null || b == null) {
                alert( 'Вы нажали отмену, повторите ввод!' );
                i--;
                continue;
            } else if
            (a == "" || b == "" || a.length >= 50 || b.length >= 50) {
                alert( 'Вы ввели пустую строку или количество символов больше 5, повторите ввод!' );
                i--;
            } else {
                personalMovieDB.movies[a] = b;
            }
        }
    },
    /* пишим функцию с условиями и выводом сообщения пользователю через встроенную функцию alert */
    /* позже по заданию переписали в метод объекта */
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert( 'Просмотрена довольно мало фильмов' );
        } else if (personalMovieDB.count <= 30) {
            alert( 'Вы классический зритель' );
        } else if (personalMovieDB.count > 30) {
            alert( 'Вы киноман' );
        } else {
            alert( 'Произошла ошибка' );
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat)
        } else {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat)
        }
    },
    writeYouGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == '' || genre == null) {
                alert('Вы ввели пустую строку или нажали отмену, повторите ввод');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        };
        personalMovieDB.genres.forEach(function (item,index) {
            console.log(`Любимый жанр #${index+1} - это ${item}`)
        })
    }
};

// personalMovieDB.start(); /* ---вызываем фунцию (метод) start */
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel(); /* ---вызываем фунцию (метод)*/
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYouGenres();


/* для цикла можно создать глобальные переменные или можно объявлять их внутри цикла */
/* счетчик i в цикле for можно объявить первым аргументом */

/* Задание на цикл через while */

// let i = 0;
// while (i <= 1) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
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

/* выполняем задание в трех функциях и понимаем что в большинсве for имеет более удобный синтаксис */

/* do сначало выполнить одну итерацию (1 повторение) потом проверять на соответвие условию в некоторых случаях полезен */

// do {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
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



// пример callback функции

// function learnJS(lang, callback) {
//     setTimeout(function(){
//         console.log(`Я изучаю ${lang}`);
//     }, 5000);
//     callback();
// }

// learnJS('javaScript', done)

// function done() {
//     console.log('This is result callback function');
// }

// пример деструктиризации объектов

/* можно создавать свои методы */

// const options = {
//     name: 'test',
//     width: 1024,
//     heigt: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeFirstMetod: function() {
//         console.log('TEST');
//     }
// }

// options.makeFirstMetod(); /* ---запуск своего метода */

// console.log(Object.keys(options).length); /* ---узнать количество ключей в объекте */

// options.colors['border'] = 'тест кирилицы на точку в объекте'; /* ---к ключам объекта можно обращатся через [] или . */
// console.log(options.colors.border); /* ---к вложенным объектам можно обращатся через проваливание */

// delete options.name; /* ---удалять ключи объекта */

/* перебор объекте через for in (для перебора под объекта используем вложенный for in)*/

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key])
//         console.log(`Свойство ${i} внутри вложенного объекта ${options[key]} имеет значение ${options[key][i]}`);
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

/* Задание с learnJavascript: нужно найти все натруральные числа до числа заданное пользователем */

// console.log('НАЧИНАЕМ!!!');
// let n = +prompt('Введите число для определения всех натуральных чисел до Вашего числа', '');
// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...
//     console.log("В данный момент перебираем - ", i);
//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }
//   alert( i ); // простое число
// }

/* Свое решение через while, разницы почти нет за исключением краткости и удобства исользования for */
// console.log('НАЧИНАЕМ!!!');
// let i = 2, /* ---перебор всех цифр меньше пользовательского значения */
// let user = +prompt('Введите число для определения всех натуральных чисел до Вашего числа', '');
// label:
// while (i <= user) {
//     console.log("В данный момент перебираем - ", i);
//     j = 2; /* ---перебор всех цифр меньше себя */
//     while (j < i) {
//         if (i % j == 0) {
//             i++;
//             continue label;
//         }
//         j++;
//     }
//     alert(i);
//     i++;
// }

/* Выдуманное задание: оценка курсов от udemy */

// function grade (name, yourWork) {
//     const obj = {
//          quality: '5balls',
//          availability: '5balls',
//          examples: '5balls',
//          author: '10balls',
//     };
//     let i = 0;
//     let sum;
//     if (name == 'Ivan' && yourWork == 'ready') {
//         for (const key in obj) {
//             i = i + parseInt(obj[key]);
//         }
//         sum = i * 4;
//         obj['sum'] = sum+'% result';
//     } else {
//         obj['sum'] = '50 % result';
//     }
//     return obj;
// }

// console.log(grade('Ivan', 'ready').sum);

