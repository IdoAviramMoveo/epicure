import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "./RestaurantsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchRestaurantsPageData } from "../../redux-toolkit/thunks/restaurantsPageThunk";
import { filterNewRestaurants } from "../../utils/redux-utils";
import { CardProps } from "../../models/types";

import Card from "../../components/Card/Card";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeFilter, setActiveFilter] = useState("All");
  const { restaurants } = useSelector((state: RootState) => state.restaurantsPage);

  useEffect(() => {
    dispatch(fetchRestaurantsPageData());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleFilterClick = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const getFilteredCards = useCallback(() => {
    switch (activeFilter) {
      case "New":
        return filterNewRestaurants(restaurants.cards, 5);
      case "Most Popular":
        return restaurants.cards.filter((restaurant) => restaurant.isPopular);
      default:
        return restaurants.cards;
    }
  }, [activeFilter, restaurants.cards]);

  return (
    <>
      <div className='restaurants-page-container'>
        <h2 className='title'>{restaurants.title}</h2>
        <div className='restaurants-filter-buttons'>
          {["All", "New", "Most Popular"].map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className='restaurants-container'>
          <Fade>
            {getFilteredCards().map((card: CardProps) => (
              <Card {...card} className='restaurants-page-card' key={card._id} />
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default RestaurantsPage;
