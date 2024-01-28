import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-links'>
          <Link to='/' className='link'>
            Contact Us
          </Link>
          <Link to='/' className='link'>
            Term of Use
          </Link>
          <Link to='/' className='link'>
            Privacy Policy
          </Link>
        </div>
      </footer>
      <div className='under-footer'></div>
    </>
  );
};

export default Footer;
