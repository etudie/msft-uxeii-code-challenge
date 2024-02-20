import { useState } from 'react';
import './styles.css';

const Search = ({setSearchTerm}) => {
    

    return (
        <div className="Search-container">
            <input className="Search-input" placeholder="Dog type" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="Search-button">Search</button>
        </div>
    )
}

export default Search;