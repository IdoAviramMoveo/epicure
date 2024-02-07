import { Section } from "../../models/types";
import spicyFoodIcon from "../../assets/images/spicyFoodIcon.svg";
import veganFoodIcon from "../../assets/images/veganFoodIcon.svg";
import vegiFoodIcon from "../../assets/images/vegiFoodIcon.svg";

interface BackendDish {
  _id: string;
  title: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  restaurant: string;
}

const getFoodIcon = (foodIcon: string): string | undefined => {
  switch (foodIcon) {
    case "Spicy":
      return spicyFoodIcon;
    case "Vegan":
      return veganFoodIcon;
    case "Vegi":
      return vegiFoodIcon;
    default:
      return undefined;
  }
};

export const transformDishData = (data: BackendDish[]): Section => {
  const cards = data.map((dish) => ({
    title: dish.title,
    image: dish.image,
    description: dish.ingredients.join(", "),
    foodIcon: getFoodIcon(dish.tags[0]),
    price: dish.price,
  }));

  return {
    title: "SIGNATURE DISH OF:",
    cards,
  };
};
