import React from "react";
import { useSelector } from "react-redux";

import "./SearchedCards.scss";

import { RootState } from "../../redux-toolkit/store";
import CardsGallery from "../CardsGallery/CardsGallery";
import { CardType } from "../../models/types";
import SearchedChefs from "./components/SearchedChefs/SearchedChefs";

const SearchedCards: React.FC = () => {
  const { chefs, dishes, restaurants } = useSelector((state: RootState) => state.search);

  return (
    <div className='searched-cards-container'>
      {(restaurants.cards.length > 0 || dishes.cards.length > 0 || chefs.length > 0) && (
        <h3 className='search-title'>Search Results</h3>
      )}
      {restaurants.cards.length > 0 && (
        <>
          <h3 className='search-sub-title'>Restaurants</h3>
          <CardsGallery cardsData={restaurants} cardType={CardType.RestaurantType} isSearch={true} />
        </>
      )}

      {dishes.cards.length > 0 && (
        <>
          <h3 className='search-sub-title'>Dishes</h3>
          <CardsGallery cardsData={dishes} cardType={CardType.DishType} isSearch={true} />
        </>
      )}
      {chefs.length > 0 && (
        <>
          <h3 className='search-sub-title'>Chefs</h3>
          <SearchedChefs chefs={chefs} />
        </>
      )}
    </div>
  );
};

export default SearchedCards;
