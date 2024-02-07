import { Section } from "../../models/types";

import oneStar from "../../assets/images/oneStar.svg";
import twoStars from "../../assets/images/twoStars.svg";
import threeStars from "../../assets/images/threeStars.svg";
import fourStars from "../../assets/images/fourStars.svg";
import fiveStars from "../../assets/images/fiveStars.svg";

export interface BackendRestaurant {
  _id: string;
  title: string;
  image: string;
  chef: { title: string };
  rating: number;
  dishes: string[];
}

const getRatingImage = (rating: number): string => {
  switch (rating) {
    case 1:
      return oneStar;
    case 2:
      return twoStars;
    case 3:
      return threeStars;
    case 4:
      return fourStars;
    case 5:
      return fiveStars;
    default:
      return oneStar;
  }
};

export const transformRestaurantData = (data: BackendRestaurant[]): Section => {
  const cards = data.map((restaurant) => ({
    title: restaurant.title,
    image: restaurant.image,
    subtitle: restaurant.chef.title,
    rating: getRatingImage(restaurant.rating),
  }));

  return {
    title: "POPULAR RESTAURANT IN EPICURE:",
    cards,
  };
};
