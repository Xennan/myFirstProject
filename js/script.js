"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Какой ваш последний просмотренный фильм? ");
    b = +prompt("Сколько баллов ему поставите? ");
    c = prompt("Какой ваш последний просмотренный фильм? ");
    d = +prompt("Сколько баллов ему поставите? ");

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB)