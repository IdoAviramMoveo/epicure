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
