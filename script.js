const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=293c14281a8d636285d1278d6f4da4f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="'

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}