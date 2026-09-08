let movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        ratings: [5, 4, 5, 4, 5],
        actors: ["Leonardo", "Tom Hardy"]
    },
    {
        id: 2,
        title: "Titanic",
        genre: "Romance",
        ratings: [5, 5, 4, 5],
        actors: ["Leonardo", "Kate Winslet"]
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        ratings: [5, 5, 5, 4, 5],
        actors: ["Christian Bale", "Tom Hardy"]
    },
    {
        id: 4,
        title: "Interstellar",
        genre: "Sci-Fi",
        ratings: [5, 4, 4, 5],
        actors: ["Matthew McConaughey", "Anne Hathaway"]
    }
];
function averageRating(movie) {
    if (movie.ratings.length === 0) return 0;

    return movie.ratings.reduce((sum, rating) =>
        sum + rating, 0
    ) / movie.ratings.length;
}
function addRating(movieId, rating) {
    const movie = movies.find(movie => movie.id === movieId);

    if (!movie) return "Movie not found.";
    if (rating < 1 || rating > 5) return "Rating must be between 1 and 5.";

    movie.ratings.push(rating);
    return "Rating added.";
}
function removeRating(movieId, ratingIndex) {
    const movie = movies.find(movie => movie.id === movieId);

    if (!movie) return "Movie not found.";
    if (ratingIndex < 0 || ratingIndex >= movie.ratings.length) {
        return "Invalid rating index.";
    }
    movie.ratings.splice(ratingIndex, 1);
    return "Rating removed.";
}
function highestRatedMovie() {
    return movies.reduce((highest, movie) =>
        averageRating(movie) > averageRating(highest) ? movie : highest
    );
}

function lowestRatedMovie() {
    return movies.reduce((lowest, movie) =>
        averageRating(movie) < averageRating(lowest) ? movie : lowest
    );
}

function moviesRatingAbove4() {
    return movies.filter(movie => averageRating(movie) > 4);
}

function moviesByGenre(genre) {
    return movies.filter(movie =>
        movie.genre.toLowerCase() === genre.toLowerCase()
    );
}

function moviesByActor(actor) {
    return movies.filter(movie =>
        movie.actors.some(name =>
            name.toLowerCase() === actor.toLowerCase()
        )
    );
}

function sortMoviesByRating() {
    return [...movies].sort((a, b) =>
        averageRating(b) - averageRating(a)
    );
}

function mostCommonGenre() {
    const genres = {};

    movies.forEach(movie => {
        genres[movie.genre] = (genres[movie.genre] || 0) + 1;
    });

    return Object.entries(genres)
        .sort((a, b) => b[1] - a[1])[0][0];
}

function top3Actors() {
    const actorCount = {};

    movies.forEach(movie => {
        movie.actors.forEach(actor => {
            actorCount[actor] = (actorCount[actor] || 0) + 1;
        });
    });

    return Object.entries(actorCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
}


console.log("Inception Average:", averageRating(movies[0]));
console.log(addRating(1, 5));
console.log("Highest:", highestRatedMovie());
console.log("Lowest:", lowestRatedMovie());
console.log("Rating > 4:", moviesRatingAbove4());
console.log("Sci-Fi:", moviesByGenre("Sci-Fi"));
console.log("Tom Hardy Movies:", moviesByActor("Tom Hardy"));
console.log("Sorted:", sortMoviesByRating());
console.log("Common Genre:", mostCommonGenre());
console.log("Top 3 Actors:", top3Actors());
