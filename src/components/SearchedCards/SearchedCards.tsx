import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import CardsGallery from "../CardsGallery/CardsGallery";
import { CardType } from "../../models/types";

const SearchedCards: React.FC = () => {
  const { chefs, dishes, restaurants } = useSelector((state: RootState) => state.search);

  return (
    <>
      {restaurants.cards.length > 0 && <CardsGallery cardsData={restaurants} cardType={CardType.RestaurantType} />}
      {dishes.cards.length > 0 && <CardsGallery cardsData={dishes} cardType={CardType.DishType} />}
    </>
  );
};

export default SearchedCards;
