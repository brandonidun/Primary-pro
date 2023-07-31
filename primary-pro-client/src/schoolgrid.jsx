import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Eachschoolgrid from "./eachschoolgrid";

const SchoolGrid = () => {
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
    <div className="schoolgrid-page">
      <Navbar />
      <div className="grid-search-form-container">
        <div className="presearch-text">
          <p>Explore basic schools all over Ghana</p>
          <div className="telescope"></div>
        </div>
        <div className="form">
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
      </div>
      <div className="grid-heading">
        <h1>Results that matched your search</h1>
      </div>
      <Eachschoolgrid />
    </div>
  );
};

export default SchoolGrid;
