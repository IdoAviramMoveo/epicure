import { BackendRestaurant } from "../redux-toolkit/adapters/restaurantAdapter";
import { BackendChef } from "../redux-toolkit/adapters/chefAdapter";
import { BackendDish } from "../redux-toolkit/adapters/dishAdapter";

import { Section, ChefData } from "../models/types";

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

export const transformChefData = (chefData: BackendChef, restaurantsData: Section): ChefData => {
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
