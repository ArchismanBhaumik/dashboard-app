import React, { useState } from "react";
import darkModeButton from '../assets/darkModeButton.svg';
import sidebarSearch from "../assets/sidebarSearch.svg";
import star from "../assets/star.svg";
import bell from "../assets/bell.svg";
import clock from "../assets/clock.svg";
import { useLocation } from 'react-router-dom';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const location = useLocation();

  const getPaddingStyle = () => {
    if (location.pathname === '/') {
      return { paddingLeft: '40%' };
    } else if (location.pathname === '/orders') {
      return { paddingLeft: '50%' };
    }
    return {};
  };

  
  const getNavbarStyle = () => {
    return {
      backgroundColor: isDarkMode ? '#333333' : '#f8f9fa', 
      color: isDarkMode ? '#ffffff' : '#000000',          
    };
  };

  const getTextColor = () => {
    return isDarkMode ? '#bbbbbb' : '#000000';    
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={getNavbarStyle()}>
        <div className="container-fluid justify-content-between">
          <div>
            <img src={sidebarSearch} alt="" />
            <img src={star} alt="" className="m-3" />
            <span style={{ color: getTextColor() }}>Dashboard /</span>
            <span style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Default</span>
          </div>
          <div className="collapse navbar-collapse" style={getPaddingStyle()} id="navbarScroll">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: isDarkMode ? '#444444' : '#ffffff',
                  color: isDarkMode ? '#dddddd' : '#000000',
                }}
              />
            </form>
            <button onClick={toggleDarkMode}>
              <img src={darkModeButton} alt="Toggle Dark Mode" />
            </button>
            <img src={clock} alt="Clock" />
            <img src={bell} className="m-3" alt="Bell" />
            <img src={sidebarSearch} alt="Sidebar" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
