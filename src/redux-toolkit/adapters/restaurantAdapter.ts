import { Section } from "../../models/types";
import { getRatingImage } from "../../utils/redux-utils";

export interface BackendRestaurant {
  _id: string;
  title: string;
  image: string;
  chef: { title: string };
  rating: number;
  dishes: string[];
}

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
