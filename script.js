// url to call movie database and filter by horror genre, more information on APU used can be found at https://developers.themoviedb.org/3/
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=293c14281a8d636285d1278d6f4da4f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&';

// movie posters are found at this link, followed by the movie ID, this generates the first part of the URL, and the rest will be generated by the API and filled in later
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// as of now, this searches the entire movie database, return later and change parameters to only include horror results
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEl);
    });
};

function getClassByRating(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

//currently cannot filter results by genre
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value=''
    } else {
        window.location.reload();
    };
});