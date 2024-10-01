import React from "react";
import darkModeButton from '../assets/darkModeButton.svg';
import sidebarSearch from "../assets/sidebarSearch.svg";
import star from "../assets/star.svg"
import bell from "../assets/bell.svg"
import clock  from "../assets/clock.svg"
import { useLocation } from 'react-router-dom';


const Header = ({toggleDarkMode}) => {

    const searBarStyle = {
        'padding-left':'40%'
    }
  const location = useLocation();

  const getPaddingStyle = () => {
    if (location.pathname === '/') {
      return { paddingLeft: '40%' };
    } else if (location.pathname === '/orders') {
      return { paddingLeft: '55%' };
    }
    return {}; 
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid justify-content-between ">
            <div>
                <img src={sidebarSearch}alt="" />
                <img src={star} alt="" className="m-3"/>
                <span className="text-secondary">Dashboard /</span>
                <span className="text-dark">Default</span>
            </div>
          <div class="collapse navbar-collapse " style={getPaddingStyle()} id="navbarScroll">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button  onClick={toggleDarkMode}>
            <img src={darkModeButton} alt="" />
            </button>
            <img src={clock} />
            <img src={bell} className="m-3" />
            <img src={sidebarSearch}alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
