import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <footer className='footer'>
        <div className='footer-links'>
          <Link to='/' className='link' onClick={handleLinkClick}>
            Contact Us
          </Link>
          <Link to='/' className='link' onClick={handleLinkClick}>
            Term of Use
          </Link>
          <Link to='/' className='link' onClick={handleLinkClick}>
            Privacy Policy
          </Link>
        </div>
      </footer>
      <div className='under-footer'></div>
    </>
  );
};

export default Footer;
