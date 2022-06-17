const numberOfFilms=+prompt("Скільки фільмів ви уже побачили?","");
const personalMovieDb={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a=prompt("Один із останніх переглянутих фільмів?", ""),
    b=prompt("На скільки ви оціните його?",""),
    c=prompt("Один із останніх переглянутих фільмів?", ""),
    d=prompt("На скільки ви оціните його?","");

    personalMovieDb.movies[a]=b;
    personalMovieDb.movies[c]=d;

console.log(personalMovieDb);