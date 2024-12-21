import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";
import "./SearchResults.css";

const SearchResults = () => {
  const { filteredUsers } = useContext(UserContext);
  const [isContentVisible, setIsContentVisible] = useState(false); 

  const handleRefresh = () => {
    setIsContentVisible(true); 
  };

  return (
    <div className="search-results">     
      {isContentVisible && (
        <>
          {filteredUsers.length > 0 ? (
            <div className="user-cards-container">
              {filteredUsers.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </div>
          ) : (
            <div className="empty-state">              
               No results found.
            </div>

          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
