import React, { createContext, useState, useEffect } from "react";
import userData from "../data/users.json";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const clonedData = JSON.parse(JSON.stringify(userData));
    setUsers(clonedData);     
  }, []); 

 
  const filteredUsers = users.filter((user) => {
    const firstName = user.first_name?.toLowerCase() || ""; 
    const lastName = user.last_name?.toLowerCase() || ""; 
    const query = searchQuery.toLowerCase();

    return firstName.includes(query) || lastName.includes(query);
  });   
  
  return (
    <UserContext.Provider value={{ users, searchQuery, setSearchQuery, filteredUsers }}>
      {children}
    </UserContext.Provider>
  );
};
