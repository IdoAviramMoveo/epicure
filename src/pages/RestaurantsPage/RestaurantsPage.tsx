import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "./RestaurantsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchRestaurantsPageData } from "../../redux-toolkit/thunks/restaurantsPageThunk";
import Card from "../../components/Card/Card";
import { CardProps } from "../../models/types";

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
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 5);

    switch (activeFilter) {
      case "New":
        return restaurants.cards.filter((restaurant) => {
          if (!restaurant._id) return false;
          const creationDate = getDateFromObjectId(restaurant._id);
          return creationDate > threeDaysAgo;
        });
      case "Most Popular":
        return restaurants.cards.filter((restaurant) => restaurant.isPopular);
      default:
        return restaurants.cards;
    }
  }, [activeFilter, restaurants.cards]);

  const getDateFromObjectId = (objectId: string): Date => {
    const timestamp = objectId.substring(0, 8);
    const date = new Date(parseInt(timestamp, 16) * 1000);
    return date;
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
