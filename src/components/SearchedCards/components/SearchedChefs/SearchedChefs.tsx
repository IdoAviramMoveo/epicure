import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SearchedChefs.scss";
import { ChefData } from "../../../../models/types";
import { SwiperConfig } from "../../../../config/SwiperConfig";

type SearchedChefsProps = {
  chefs: ChefData[];
};

/*
<Swiper className='swiper' {...SwiperConfig(spaceBetween)}>
            {cardsData.cards.map((card: CardProps) => (
              <SwiperSlide className='swiper-slide' key={card.title}>
                <div onClick={() => cardType === CardType.DishType && handleCardClick(card)}>
                  <Card {...card} className={className} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
*/
const SearchedChefs: React.FC<SearchedChefsProps> = ({ chefs }) => {
  return (
    <div className='searched-chefs-container'>
      <Swiper className='swiper' {...SwiperConfig(24)}>
        {chefs.map((chef) => (
          <SwiperSlide className='swiper-slide' key={chef.image}>
            <div key={chef.image} className='searched-chef-card'>
              <div className='chef-image-container' style={{ backgroundImage: `url(${chef.image})` }}>
                <h3 className='chef-name'>{chef.chefName}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SearchedChefs;
