import React from 'react'; 

const SearchBar = ({onSearchTermChange}) => {
    return(
        <div className="search-bar">
            <input
                onChange={(e) => onSearchTermChange(e.target.value)} type="text"
            />
        </div>
    );
}

export default SearchBar;