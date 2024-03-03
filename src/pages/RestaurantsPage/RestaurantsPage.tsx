import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade, Slide } from "react-awesome-reveal";

import "./RestaurantsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchRestaurantsPageData } from "../../redux-toolkit/thunks/restaurantsPageThunk";
import { fetchHomePageData } from "../../redux-toolkit/thunks/homePageThunk";
import Card from "../../components/Card/Card";
import { CardProps } from "../../models/types";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeFilter, setActiveFilter] = useState("All");

  const { restaurants } = useSelector((state: RootState) => state.restaurantsPage);
  const { popularRestaurants } = useSelector((state: RootState) => state.homePage);

  useEffect(() => {
    dispatch(fetchRestaurantsPageData());
    if (!popularRestaurants.cards.length) {
      dispatch(fetchHomePageData());
    }
  }, [dispatch, popularRestaurants, restaurants, popularRestaurants.cards]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredCards = () => {
    if (activeFilter === "New") {
      return restaurants.cards.slice(-9).map((card: CardProps) => <Card {...card} className='restaurants-page-card' key={card.title} />);
    } else if (activeFilter === "Most Popular") {
      return popularRestaurants.cards.map((card: CardProps) => <Card {...card} className='restaurants-page-card' key={card.title} />);
    }
    return restaurants.cards.map((card: CardProps) => <Card {...card} className='restaurants-page-card' key={card.title} />);
  };

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
          <Fade>{filteredCards()}</Fade>
        </div>
      </div>
    </>
  );
};

export default RestaurantsPage;
