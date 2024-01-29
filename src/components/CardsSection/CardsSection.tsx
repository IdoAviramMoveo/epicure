import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CardsSection.scss";
import Card from "../Card/Card";
import { CardProps } from "../../models/types";
import allRestaurantsIcon from "../../assets/images/allRestaurantsIcon.svg";

export type section = {
  title: string;
  cards: CardProps[];
};

export type CardSectionProps = {
  cardsData: section;
  cardType: number;
};

const CardsSection: React.FC<CardSectionProps> = ({ cardsData, cardType }) => {
  const spaceBetween: number = cardType === 3 ? 16 : 24;
  return (
    <>
      <div className='cards-section'>
        <h3>{cardsData.title}</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          initialSlide={0}
          spaceBetween={24}
          slidesPerView={1.4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          breakpoints={{
            900: {
              spaceBetween: spaceBetween,
              slidesPerView: 3,
            },
          }}
          watchOverflow={true}
        >
          {cardsData.cards.map((card: CardProps) => {
            const cardProps: CardProps = {
              title: card.title,
              image: card.image,
            };
            if (cardType === 1) {
              cardProps.subtitle = card.subtitle;
              cardProps.rating = card.rating;
              cardProps.className = "first-type";
            } else if (cardType === 2) {
              cardProps.description = card.description;
              cardProps.foodIcon = card.foodIcon;
              cardProps.price = card.price;
            } else {
              cardProps.className = "third-type";
            }

            return (
              <SwiperSlide key={card.title}>
                <Card {...cardProps} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {cardType === 1 && (
          <div className='all-restaurants'>
            <span>All Restaurants</span>
            <img src={allRestaurantsIcon} alt='All Restaurants' className='icon' />
          </div>
        )}
      </div>
    </>
  );
};

export default CardsSection;
