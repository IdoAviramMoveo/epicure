import "./Hero.scss";

import searchLogo from "../../assets/images/searchLogo.svg";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <div className='hero-text'>Epicure works with the top chef restaurants in Tel Aviv</div>
          <div className='search-bar'>
            <button>
              <img src={searchLogo} alt='Search Logo' />
            </button>
            <input type='text' placeholder='Search for restaurant cuisine, chef' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
