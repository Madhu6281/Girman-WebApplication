
import React, { useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext";
import Navbar from "./components/ui/Navbar";
import SearchResults from "./components/ui/SearchResults";
import "./App.css";
import SearchBox from "./components/ui/SearchBox";


const App = () => {

  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleNavigateToSearch = () => {
    setIsSearchActive(true);  // Set the search active when search is clicked
  };

  return(
  <UserProvider>
  <Router>
    <Navbar onNavigateToSearch={handleNavigateToSearch} />
      <SearchBox isSearchActive={isSearchActive} />
    <Routes>      
    <Route path="/search" element={<SearchResults />} />
    </Routes>
  </Router>
  </UserProvider>
);
};

export default App;
