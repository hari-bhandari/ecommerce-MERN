import React from 'react';
import './Search.css'
const SearchBar = () => {
    return (
        <div className="searchBox">

            <input className="searchInput" type="text" name="" placeholder="Search"/>
                <button className="searchButton" href="#">
                    <i className="fas fa-search"></i>
                </button>
        </div>
    );
};

export default SearchBar;