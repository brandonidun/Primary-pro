import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    };

     const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    };

    return ( 
    <div className="form-container"> 
        <div className="presearch-text">
            <p>
            Explore basic schools all over Ghana
            </p>
            <div className="telescope">
            </div>
        </div>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="lookup your favorite schools"
                value={searchTerm}
                onChange={handleInputChange}
                />
                <button type="submit">
                </button>
            </form>
        </div>
    </div>
     );
}
 
export default Search;