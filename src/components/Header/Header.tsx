import { Link } from "react-router-dom";

import "./Header.scss";
import hamburgerLogo from "../../assets/images/hamburgerLogo.svg";
import epicureLogo from "../../assets/images/epicureLogo.png";
import bagLogo from "../../assets/images/bagLogo.svg";
import searchLogo from "../../assets/images/searchLogo.svg";
import userLogo from "../../assets/images/userLogo.svg";

const Header = () => {
  return (
    <>
      <header className='header'>
        <img className='hamburger-menu' src={hamburgerLogo} alt='Menu' />

        <img className='app-logo' src={epicureLogo} alt='Epicure Logo' />

        <div className='navbar-links'>
          <Link to='/' className='big-link'>
            EPICURE
          </Link>
          <Link to='/' className='small-link'>
            Restaurants
          </Link>
          <Link to='/' className='small-link'>
            Chefs
          </Link>
        </div>

        <div className='navbar-icons'>
          <img className='icon' src={searchLogo} alt='Search' />
          <img className='icon' src={userLogo} alt='User Account' />
          <img className='icon' src={bagLogo} alt='Shopping Bag' />
        </div>
      </header>
    </>
  );
};

export default Header;
