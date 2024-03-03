import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RestaurantsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchRestaurantsPageData } from "../../redux-toolkit/thunks/restaurantsPageThunk";
import Card from "../../components/Card/Card";
import { CardProps } from "../../models/types";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { restaurants } = useSelector((state: RootState) => state.restaurantsPage);

  useEffect(() => {
    dispatch(fetchRestaurantsPageData());
  }, [dispatch]);

  return (
    <>
      <div className='restaurants-page-container'>
        <h2>{restaurants.title}</h2>
        <div className='restaurants-container'>
          {restaurants.cards.map((card: CardProps) => (
            <Card {...card} className='first-type' key={card.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantsPage;
