import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSearch = (e) => {
    searchYelp(term, location, sortBy);
  };
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          onChange={(e) => handleTermChange(e)}
          value={term}
        />
        <input
          placeholder="Where?"
          onChange={(e) => handleLocationChange(e)}
          value={location}
        />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};
