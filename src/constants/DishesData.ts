import { Section } from "../models/types";

import padKiMao from "../assets/images/padKiMao.png";
import taMaLaKo from "../assets/images/taMaLaKo.png";
import redFarm from "../assets/images/redFarm.png";
import smokedPizza from "../assets/images/smokedPizza.png";

import spicyFoodIcon from "../assets/images/spicyFoodIcon.svg";
import veganFoodIcon from "../assets/images/veganFoodIcon.svg";
import vegiFoodIcon from "../assets/images/vegiFoodIcon.svg";

const DishesData: Section = {
  title: "SIGNATURE DISH OF:",
  cards: [
    {
      title: "Pad Ki Mao",
      image: padKiMao,
      description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      foodIcon: spicyFoodIcon,
      price: 88,
    },
    {
      title: "Ta Ma La Ko",
      image: taMaLaKo,
      description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
      foodIcon: veganFoodIcon,
      price: 98,
    },
    {
      title: "Red Farm",
      image: redFarm,
      description: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
      foodIcon: vegiFoodIcon,
      price: 98,
    },
    {
      title: "Smoked Pizza",
      image: smokedPizza,
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      foodIcon: veganFoodIcon,
      price: 65,
    },
    {
      title: "Pad Ki Mau",
      image: padKiMao,
      description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      foodIcon: spicyFoodIcon,
      price: 88,
    },
    {
      title: "Ta Ma La Ku",
      image: taMaLaKo,
      description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
      foodIcon: veganFoodIcon,
      price: 98,
    },
    {
      title: "Purple Farm",
      image: redFarm,
      description: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
      foodIcon: vegiFoodIcon,
      price: 98,
    },
    {
      title: "Pizza",
      image: smokedPizza,
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      foodIcon: veganFoodIcon,
      price: 65,
    },
  ],
};

export default DishesData;
