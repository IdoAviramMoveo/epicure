import { Section } from "../models/types";

import onzaRestaurant from "../assets/images/onzaRestaurant.png";
import kitchenMarketRestaurant from "../assets/images/kitchenMarketRestaurant.png";
import mashyaRestaurant from "../assets/images/mashyaRestaurant.png";

const YossiRestaurantsData: Section = {
  title: "yossi’s restaurants:",
  cards: [
    {
      title: "Onza",
      image: onzaRestaurant,
    },
    {
      title: "Kitchen Market",
      image: kitchenMarketRestaurant,
    },
    {
      title: "Mashya",
      image: mashyaRestaurant,
    },
  ],
};

export default YossiRestaurantsData;
