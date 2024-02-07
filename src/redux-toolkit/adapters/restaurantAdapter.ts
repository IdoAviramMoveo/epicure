import { Section } from "../../models/types";

export interface BackendRestaurant {
  _id: string;
  title: string;
  image: string;
  chef: string;
  rating: number;
  dishes: string[];
}

export const transformRestaurantData = (data: BackendRestaurant[]): Section => {
  const cards = data.map((restaurant) => ({
    title: restaurant.title,
    image: restaurant.image,
    subtitle: "",
    rating: "★".repeat(restaurant.rating),
  }));

  return {
    title: "POPULAR RESTAURANT IN EPICURE:",
    cards,
  };
};
