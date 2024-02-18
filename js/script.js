"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", '');
        };
    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой ваш последний просмотренный фильм? "),
                b = +prompt("Сколько баллов ему поставите? ");
        
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("Error");
                i--;
            }
        
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log("Маловато");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы прямо таки знаток!");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Error");
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat === true) {
            console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Какой ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные или вовсе их не вводили");
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`)
        });
    }

};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();