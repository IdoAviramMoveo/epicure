import { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAll } from "../../redux-toolkit/thunks/searchThunk";
import { AppDispatch, RootState } from "../../redux-toolkit/store";
import { useSelector } from "react-redux";

import "./Hero.scss";

import searchLogo from "../../assets/images/searchLogo.svg";
import { resetSearchInputFocus } from "../../redux-toolkit/slices/searchSlice";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);
  const shouldFocusSearchInput = useSelector((state: RootState) => state.search.shouldFocusSearchInput);

  useEffect(() => {
    if (shouldFocusSearchInput) {
      inputRef.current?.focus();
      dispatch(resetSearchInputFocus());
    }
  }, [shouldFocusSearchInput, dispatch]);

  const handleSearch = useCallback(() => {
    dispatch(searchAll(searchTerm));
  }, [dispatch, searchTerm]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

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
              ref={inputRef}
              type='text'
              placeholder='Search for restaurant cuisine, chef'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
