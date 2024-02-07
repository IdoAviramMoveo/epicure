import { Section } from "../../models/types";

interface BackendDish {
  _id: string;
  title: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  restaurant: string;
}

export const transformDishData = (data: BackendDish[]): Section => {
  const cards = data.map((dish) => ({
    title: dish.title,
    image: dish.image,
    description: dish.ingredients.join(", "),
    foodIcon: dish.tags[0],
    price: dish.price,
  }));

  return {
    title: "SIGNATURE DISH OF:",
    cards,
  };
};
