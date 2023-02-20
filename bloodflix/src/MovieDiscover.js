import React from 'react'
import './MovieDiscover.css'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=293c14281a8d636285d1278d6f4da4f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="';

export default function MovieDiscover() {
    
    getMovies(API_URL)
    
    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()

        getMovieData(data.results)
    };

    function getMovieData(movies) {

        function getClassByRating(vote) {
            if (vote >= 8) {
                return 'green'
            } else if (vote >= 5) {
                return 'orange'
            } else {
                return 'red'
            }
        }
        
        // movies.forEach((movie) => {
             const { title, poster_path, vote_average, overview } = movies;

            return (
                <main id="main">
                    {movies.map((movie) => (
                        <div key="movie" class="movie">
                        <img src={IMG_PATH + poster_path} alt={title}/>
                        <div class="movie-info">
                            <h3>{title}</h3>
                            <span class={getClassByRating(vote_average)}>{vote_average}</span>
                        </div>
                        <div class="overview">
                            <h3>Overview</h3>
                            {overview}
                        </div>
                    </div>
                    ))}
                    
                </main>
            )
    };

    
}
