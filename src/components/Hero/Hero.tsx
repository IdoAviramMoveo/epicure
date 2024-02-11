import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchAll } from "../../redux-toolkit/thunks/searchThunk";
import { AppDispatch } from "../../redux-toolkit/store";

import "./Hero.scss";

import searchLogo from "../../assets/images/searchLogo.svg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = useCallback(() => {
    dispatch(searchAll(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div className='hero-container'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <div className='hero-text'>Epicure works with the top chef restaurants in Tel Aviv</div>
          <div className='search-bar'>
            <button onClick={handleSearch}>
              <img src={searchLogo} alt='Search Logo' />
            </button>
            <input
              type='text'
              placeholder='Search for restaurant cuisine, chef'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
