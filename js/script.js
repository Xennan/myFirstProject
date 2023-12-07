const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Какой ваш последний просмотренный фильм? ");
        b = +prompt("Сколько баллов ему поставите? ");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("Error");
        i--;
    }

}

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log("Маловато");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы прямо таки знаток!");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Error")
}

console.log(personalMovieDB)