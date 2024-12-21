import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";
import Logo from "../../assets/Screenshot (19).png";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";

const SearchBox = () => {
  const { searchQuery, setSearchQuery, filteredUsers } = useContext(UserContext);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/search");
    }
  };

  return (
    <div className="search-box-container">
      <div className="search-box-wrapper">        
        {!isFocused && (
          <img src={Logo} alt="Girman Technologies Logo" className="search-logo" />
        )}
        <form onSubmit={handleSearchSubmit}>
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="search-box"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </form>
      </div>
     
      {searchQuery.trim() && filteredUsers.length > 0 && (
        <div className="user-cards-container">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
      
      {searchQuery.trim() && filteredUsers.length === 0 && (
        <div className="empty-state">No results found.</div>
      )}
    </div>
  );
};

export default SearchBox;
