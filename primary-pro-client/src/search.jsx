import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: event.target.value }),
      });
      const searchResults = await res.json();
      setSearchResults(searchResults);
    };

    if (event.target.value !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-form-container">
      <div className="presearch-text">
        <p>Explore basic schools all over Ghana</p>
        <div className="telescope"></div>
      </div>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="lookup your favorite schools"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Link to="/schoolgrid.jsx">
            <button type="submit"></button>
          </Link>
        </form>
        <div className="search-result">
          {searchResults.map((searchResult) => {
            return (
              <Link to="/schoolinfo.jsx">
                <div className="each-search-result" key={searchResult._id}>
                  {searchResult.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="search-filters">
        <p>Search by filter (optional)</p>
        <div className="search-filter-buttons">
          <button>accepts school transfers</button>
          <button>public</button>
          <button>private</button>
          <button>small(200 and under)</button>
          <button>medium(201 to 999)</button>
          <button>large(1,000+)</button>
          <button>rural</button>
          <button>suburban</button>
          <button>urban</button>
          <button>in close range</button>
          <button>mentally disorder care</button>
        </div>
        <div className="start">
          <button type="submit">start</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
