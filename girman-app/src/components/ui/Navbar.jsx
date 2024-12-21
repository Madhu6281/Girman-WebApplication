import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Screenshot (18).png";

const Navbar = ({ onNavigateToSearch }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSearchClick = () => {
    setActiveLink("search"); 
    onNavigateToSearch();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src={Logo}
          alt="Girman Technologies Logo"
          className="navbar-logo-image"
        />
      </div>
      <div className="navbar-container">
        <div className="navbar-links">         
          
          <Link
            to="/search"
            className={({ isActive }) => 
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={onNavigateToSearch} 
          >
            Search
          </Link>

          <a href="https://girmantech.com" target="_blank" rel="noreferrer">
            Website
          </a>
          <a
            href="https://linkedin.com/company/girman-tech"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:contact@girmantech.com">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
