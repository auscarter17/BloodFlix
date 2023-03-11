import React, { useEffect, useState } from 'react'
import './Search.css';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=293c14281a8d636285d1278d6f4da4f7&query="';


export default function Search() {
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    fetch(SEARCH_API)
  })

  return (
    <div className='search'>
      <input type='text' className='input' placeholder='Search...'/>
        <button className='btn'>
          <i className='fas fa-search'></i>
        </button>
    </div>
  )
}