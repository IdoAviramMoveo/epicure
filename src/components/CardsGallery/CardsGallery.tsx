import React, { useCallback } from "react";
import { AppDispatch } from "../../redux-toolkit/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CardsGallery.scss";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux-toolkit/slices/homePageSlice";
import { CardProps, CardsGalleryProps, CardType } from "../../models/types";
import { SwiperConfig } from "../../config/SwiperConfig";
import allRestaurantsIcon from "../../assets/images/allRestaurantsIcon.svg";

const CardsGallery: React.FC<CardsGalleryProps> = ({ cardsData, cardType, isSearch }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCardClick = useCallback(
    (card: CardProps) => {
      dispatch(openModal(card));
    },
    [dispatch]
  );

  const spaceBetween: number = cardType === 3 ? 16 : 24;
  const className = cardType === CardType.ChefRestaurantType ? "third-type" : cardType === CardType.RestaurantType ? "first-type" : "";
  return (
    <>
      <Fade>
        <div className={`cards-section${cardType === CardType.ChefRestaurantType ? "-three" : ""}`}>
          {!isSearch && (
            <h3 className={`cards-section-title${cardType === CardType.ChefRestaurantType ? "-three" : ""}`}>{cardsData.title}</h3>
          )}
          <Swiper className='swiper' {...SwiperConfig(spaceBetween)}>
            {cardsData.cards.map((card: CardProps) => (
              <SwiperSlide className='swiper-slide' key={card.title}>
                <div onClick={() => cardType === CardType.DishType && handleCardClick(card)}>
                  <Card {...card} className={className} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {cardType === CardType.RestaurantType && (
            <div className='all-restaurants'>
              <span className='all-restaurants-text'>All Restaurants</span>
              <img src={allRestaurantsIcon} alt='All Restaurants' className='arrows-icon' />
            </div>
          )}
        </div>
      </Fade>
    </>
  );
};

export default CardsGallery;
