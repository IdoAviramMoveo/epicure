import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import "./Header.scss";
import hamburgerLogo from "../../assets/images/hamburgerLogo.svg";
import closeDropdownLogo from "../../assets/images/xDropdown.svg";
import epicureLogo2 from "../../assets/images/epicureLogo2.png";
import bagLogo from "../../assets/images/bagLogo.svg";
import searchLogo from "../../assets/images/searchLogo.svg";
import userLogo from "../../assets/images/userLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setIsDropdownOpen(false);
    if (location.pathname === path) {
      navigate(0);
    } else {
      navigate(path);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <div className='header-and-dropdown-container'>
        <header className='header'>
          {isDropdownOpen ? (
            <img className='hamburger-menu' src={closeDropdownLogo} alt='Close' onClick={toggleDropdown} />
          ) : (
            <img className='hamburger-menu' src={hamburgerLogo} alt='Menu' onClick={toggleDropdown} />
          )}

          {!isDropdownOpen && <img className='app-logo' src={epicureLogo2} alt='Epicure Logo' onClick={() => handleLinkClick("/")} />}

          <div className='navbar-links'>
            <Link to='/' className='big-link' onClick={() => handleLinkClick("/")}>
              EPICURE
            </Link>
            <NavLink
              to='/restaurants'
              className={({ isActive }) => (isActive ? "small-link active" : "small-link")}
              onClick={() => handleLinkClick("/restaurants")}
            >
              Restaurants
            </NavLink>
            <Link to='/' className='small-link' onClick={() => handleLinkClick("/")}>
              Chefs
            </Link>
          </div>

          {!isDropdownOpen && (
            <div className='navbar-icons'>
              <img className='icon' src={searchLogo} alt='Search' />
              <img className='icon' src={userLogo} alt='User Account' />
              <img className='icon' src={bagLogo} alt='Shopping Bag' />
            </div>
          )}
        </header>

        {isDropdownOpen && (
          <div className='dropdown-menu'>
            <NavLink to='/restaurants' className='dropdown-link' onClick={() => handleLinkClick("/restaurants")}>
              Restaurants
            </NavLink>
            <NavLink to='/' className='dropdown-link' onClick={() => handleLinkClick("/")}>
              Chefs
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
