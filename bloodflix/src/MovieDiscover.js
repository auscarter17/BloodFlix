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
                console.log(data);
                setMovies(data);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    

    
    if (!movies.length) return(
        <div>No Data</div>
    )


    return (
        <div id="main">
            {movies.map((movie) => {
                <div key={movie.id} className='movie'>
                    <h3>{movie.name}</h3>
                </div>
            })}
        </div>
    )

    
            }

