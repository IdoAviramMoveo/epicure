import { createAsyncThunk } from "@reduxjs/toolkit";

import { Section, ChefData } from "../../models/types";
import { restaurantAdapter } from "../adapters/restaurantAdapter";
import { dishAdapter } from "../adapters/dishAdapter";
import { chefAdapter } from "../adapters/chefAdapter";
import { transformRestaurantData, transformDishData, transformChefData } from "../../utils/redux-utils";

interface HomePageData {
  popularRestaurants: Section;
  signatureDishes: Section;
  chefOfTheWeek: ChefData;
}

export const fetchHomePageData = createAsyncThunk("homePage/fetchData", async (): Promise<HomePageData> => {
  const popularRestaurants = await restaurantAdapter.getPopularRestaurants();
  const signatureDishes = await dishAdapter.getSignatureDishes();
  const chefOfTheWeek = await chefAdapter.getChefOfTheWeek();

  return {
    popularRestaurants: transformRestaurantData(popularRestaurants, "POPULAR RESTAURANT IN EPICURE:"),
    signatureDishes: transformDishData(signatureDishes),
    chefOfTheWeek: transformChefData(chefOfTheWeek, transformRestaurantData(chefOfTheWeek.restaurants)),
  };
});
