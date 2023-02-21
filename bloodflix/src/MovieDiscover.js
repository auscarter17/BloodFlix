import React, { useEffect, useState } from 'react'
import './MovieDiscover.css'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=293c14281a8d636285d1278d6f4da4f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="';

export default function MovieDiscover() {
    
    const [movies, setMovies] = useState([]);    
    
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                console.log(movies)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    function getClassByRating(vote) {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <main id="main">
            {movies.map((movie) => (
                <div key={movie.id} className='movie'>
                    <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
                    <div className='movie-info'>
                        <h3>{movie.title}</h3>
                        <span class={getClassByRating(movie.vote_average)}>{movie.vote_average}</span>
                    </div>
                    <div className='overview'>
                        <h3>{movie.title}</h3>
                        {movie.overview}
                    </div>
                </div>
            ))}
            
        </main>
    )

    
}

