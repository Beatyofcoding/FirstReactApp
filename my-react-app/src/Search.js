import React from "react";

const Search = ({onSearch}) => (
    <label htmlFor="searchInput">Search: </label>
            <input id="searchInput" 
                type="text" 
                onChange={onSearch}  />
)