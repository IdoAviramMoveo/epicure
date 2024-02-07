import { ChefData, Section } from "../../models/types";

export interface BackendChef {
  _id: string;
  title: string;
  image: string;
  description: string;
  restaurants: string[];
}

export const transformChefData = (chefData: BackendChef, restaurantsData: Section): ChefData => {
  const chefOfTheWeekRestaurants = restaurantsData.cards.map((restaurant) => ({
    title: restaurant.title,
    image: restaurant.image,
  }));

  const restaurantsSection: Section = {
    title: "Yossi’s Restaurants:",
    cards: chefOfTheWeekRestaurants,
  };

  return {
    title: "Chef Of The Week:",
    chefName: chefData.title,
    image: chefData.image,
    chefDescription: chefData.description,
    restaurants: restaurantsSection,
  };
};
