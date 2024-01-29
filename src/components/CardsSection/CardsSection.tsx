import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "../Card/Card";
import "./CardsSection.scss";
import { CardProps } from "../../models/types";
import React from "react";

export type section = {
  title: string;
  cards: CardProps[];
};

export type CardSectionProps = {
  cardsData: section;
  cardType: number;
};

const CardsSection: React.FC<CardSectionProps> = ({ cardsData, cardType }) => {
  return (
    <>
      <div className='cards-section'>
        <h3>{cardsData.title}</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1.4}
          breakpoints={{
            900: {
              spaceBetween: 20,
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
      </div>
    </>
  );
};

export default CardsSection;
