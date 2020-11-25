import React from 'react'
import "./SearchMovies.css";


function SearchMovies() {


    return (
        <div>
            <form className="form">
              <label className="label">movie name</label>
              <input type="text" className="input" name="query" placeholder="i.e jurassic park"/>
              <button className="button" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchMovies;
