import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Section, ChefData } from "../../models/types";
import { transformRestaurantData } from "../adapters/restaurantAdapter";
import { transformDishData } from "../adapters/dishAdapter";
import { transformChefData } from "../adapters/chefAdapter";

interface HomePageData {
  popularRestaurants: Section;
  signatureDishes: Section;
  chefOfTheWeek: ChefData;
}

export const fetchHomePageData = createAsyncThunk<HomePageData>(
  "homePage/fetchData",
  async (): Promise<HomePageData> => {
    const [popularRestaurantsResponse, signatureDishesResponse, chefOfTheWeekResponse] = await Promise.all([
      axios.get("http://localhost:3000/restaurants/popular"),
      axios.get("http://localhost:3000/dishes/signature"),
      axios.get("http://localhost:3000/chefs/chef-of-the-week"),
    ]);

    const popularRestaurants = transformRestaurantData(popularRestaurantsResponse.data);
    const signatureDishes = transformDishData(signatureDishesResponse.data);
    const chefOfTheWeek: ChefData = transformChefData(
      chefOfTheWeekResponse.data,
      transformRestaurantData(chefOfTheWeekResponse.data.restaurants)
    );

    return {
      popularRestaurants,
      signatureDishes,
      chefOfTheWeek,
    };
  }
);
