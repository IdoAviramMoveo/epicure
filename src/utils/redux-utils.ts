import spicyFoodIcon from "../assets/images/spicyFoodIcon.svg";
import veganFoodIcon from "../assets/images/veganFoodIcon.svg";
import vegiFoodIcon from "../assets/images/vegiFoodIcon.svg";
import oneStar from "../assets/images/oneStar.svg";
import twoStars from "../assets/images/twoStars.svg";
import threeStars from "../assets/images/threeStars.svg";
import fourStars from "../assets/images/fourStars.svg";
import fiveStars from "../assets/images/fiveStars.svg";

export const getFoodIcon = (foodIcon: string): string | undefined => {
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
