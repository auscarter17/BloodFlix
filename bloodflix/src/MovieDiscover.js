import React, { Component } from 'react'
import './MovieDiscover.css'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=293c14281a8d636285d1278d6f4da4f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="';

export default function MovieDiscover() {
    
    
    return (
        <main id="main">
            <div class="movie">
                <img src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="poster"/>
                    <div class="movie-info">
                        <h3>Title</h3>
                        <span class="green">9</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste autem ipsam nemo optio assumenda saepe itaque aliquid illo debitis.
                    </div>
            </div>
        </main>
    )
}
