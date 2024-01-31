import ChefOfTheWeekRestaurantsData from "./ChefOfTheWeekRestaurantsData";
import { ChefData } from "../models/types";

import chefYossi from "../assets/images/chefYossi.png";

const ChefOfTheWeekData: ChefData = {
  title: "Chef Of The Week:",
  chefName: "Yossi Shitrit",
  image: chefYossi,
  chefDescription:
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.",
  restaurants: ChefOfTheWeekRestaurantsData,
};

export default ChefOfTheWeekData;
