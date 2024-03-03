import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";
import hamburgerLogo from "../../assets/images/hamburgerLogo.svg";
import epicureLogo2 from "../../assets/images/epicureLogo2.png";
import bagLogo from "../../assets/images/bagLogo.svg";
import searchLogo from "../../assets/images/searchLogo.svg";
import userLogo from "../../assets/images/userLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      navigate(0);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header className='header'>
        <img className='hamburger-menu' src={hamburgerLogo} alt='Menu' />

        <img className='app-logo' src={epicureLogo2} alt='Epicure Logo' onClick={() => handleLinkClick("/")} />

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
