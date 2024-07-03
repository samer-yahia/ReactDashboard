import React from 'react';
import './searchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
        <form action="#" method='POST' className="search-form d-flex align-items-center">
            <input type="text" name="query" placeholder='Search' title='Type search keyword' />

            <button type="submit" title='Search'>
                <i className="bi bi-search"></i>
            </button>
        </form>
        
    </div>
  )
}

export default SearchBar