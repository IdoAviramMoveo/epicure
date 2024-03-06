import { BackendRestaurant } from "../redux-toolkit/adapters/restaurantAdapter";
import { BackendChef } from "../redux-toolkit/adapters/chefAdapter";
import { BackendDish } from "../redux-toolkit/adapters/dishAdapter";
import { Section, ChefData, CardProps } from "../models/types";

import spicyFoodIcon from "../assets/images/spicyFoodIcon.svg";
import veganFoodIcon from "../assets/images/veganFoodIcon.svg";
import vegiFoodIcon from "../assets/images/vegiFoodIcon.svg";
import placeholderIcon from "../assets/images/placeHolderIcon.png";
import oneStar from "../assets/images/oneStar.svg";
import twoStars from "../assets/images/twoStars.svg";
import threeStars from "../assets/images/threeStars.svg";
import fourStars from "../assets/images/fourStars.svg";
import fiveStars from "../assets/images/fiveStars.svg";

export const getFoodIcon = (tags: string[]): string[] => {
  if (!tags.length) return [placeholderIcon];

  return tags
    .map((tag) => {
      switch (tag) {
        case "Spicy":
          return spicyFoodIcon;
        case "Vegan":
          return veganFoodIcon;
        case "Vegi":
          return vegiFoodIcon;
        default:
          return undefined;
      }
    })
    .filter((icon): icon is string => icon !== undefined);
};

export const getRatingImage = (rating: number): string => {
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

export const transformChefOfTheWeekData = (chefData: BackendChef, restaurantsData: Section): ChefData => {
  const chefOfTheWeekRestaurants = restaurantsData.cards.map((restaurant) => ({
    title: restaurant.title,
    image: restaurant.image,
  }));

  const restaurantsSection: Section = {
    title: `${chefData.title.split(" ")[0]}’s Restaurants:`,
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

export const transformChefData = (chefData: BackendChef[]): ChefData[] => {
  const chefs: ChefData[] = chefData.map((chef) => ({
    title: "",
    chefName: chef.title,
    image: chef.image,
    chefDescription: chef.description,
    restaurants: { title: "", cards: [] },
    _id: chef._id,
  }));

  return chefs;
};

export const transformDishData = (data: BackendDish[]): Section => {
  const cards = data.map((dish) => ({
    title: dish.title,
    image: dish.image,
    description: dish.ingredients.join(", "),
    foodIcons: getFoodIcon(dish.tags),
    price: dish.price,
  }));

  return {
    title: "SIGNATURE DISH OF:",
    cards,
  };
};

export const transformRestaurantData = (data: BackendRestaurant[], title: string = ""): Section => {
  const cards = data.map((restaurant) => ({
    title: restaurant.title,
    image: restaurant.image,
    subtitle: restaurant.chef.title,
    rating: getRatingImage(restaurant.rating),
    isPopular: restaurant.isPopular,
    _id: restaurant._id,
  }));

  return {
    title,
    cards,
  };
};

export const getDateFromObjectId = (objectId: string): Date => {
  const timestamp = objectId.substring(0, 8);
  const date = new Date(parseInt(timestamp, 16) * 1000);
  return date;
};

export const filterNewRestaurants = (restaurants: CardProps[], days: number): CardProps[] => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return restaurants.filter((restaurant) => {
    if (!restaurant._id) return false;
    const creationDate = getDateFromObjectId(restaurant._id);
    return creationDate > date;
  });
};

export const filterNewChefs = (chefs: ChefData[], days: number): ChefData[] => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return chefs.filter((chef) => {
    if (!chef._id) return false;
    const creationDate = getDateFromObjectId(chef._id);
    return creationDate > date;
  });
};
