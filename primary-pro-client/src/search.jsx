import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    const fetchData = async () => {
      const res = await fetch("https://primary-pro.onrender.com/search", {
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

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((item) => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const isFilterActive = (filter) => {
    return activeFilters.includes(filter);
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
          <button
            className={
              activeFilters.includes("accepts school transfers") ? "active" : ""
            }
            onClick={() => toggleFilter("accepts school transfers")}
          >
            accepts school transfers{" "}
            {isFilterActive("accepts school transfers") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("public") ? "active" : ""}
            onClick={() => toggleFilter("public")}
          >
            public {isFilterActive("public") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("private") ? "active" : ""}
            onClick={() => toggleFilter("private")}
          >
            private {isFilterActive("private") ? "✓" : ""}
          </button>
          <button
            className={
              activeFilters.includes("small(200 and under)") ? "active" : ""
            }
            onClick={() => toggleFilter("small(200 and under)")}
          >
            small(200 and under){" "}
            {isFilterActive("small(200 and under)") ? "✓" : ""}
          </button>
          <button
            className={
              activeFilters.includes("medium(201 to 999)") ? "active" : ""
            }
            onClick={() => toggleFilter("medium(201 to 999)")}
          >
            medium(201 to 999) {isFilterActive("medium(201 to 999)") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("large(1,000+)") ? "active" : ""}
            onClick={() => toggleFilter("large(1,000+)")}
          >
            large(1,000+) {isFilterActive("large(1,000+)") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("rural") ? "active" : ""}
            onClick={() => toggleFilter("rural")}
          >
            rural {isFilterActive("rural") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("suburban") ? "active" : ""}
            onClick={() => toggleFilter("suburban")}
          >
            suburban {isFilterActive("suburban") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("urban") ? "active" : ""}
            onClick={() => toggleFilter("urban")}
          >
            urban {isFilterActive("urban") ? "✓" : ""}
          </button>
          <button
            className={activeFilters.includes("in close range") ? "active" : ""}
            onClick={() => toggleFilter("in close range")}
          >
            in close range {isFilterActive("in close range") ? "✓" : ""}
          </button>
          <button
            className={
              activeFilters.includes("mentally disorder care") ? "active" : ""
            }
            onClick={() => toggleFilter("mentally disorder care")}
          >
            mentally disorder care{" "}
            {isFilterActive("mentally disorder care") ? "✓" : ""}
          </button>
        </div>
        <div className="start">
          <Link to="/schoolgrid.jsx">
            <button type="submit">start</button>
          </Link>
          <Link to="/schoolgrid.jsx">
            <a href="">{"or view all schools >"}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
