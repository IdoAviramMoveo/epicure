import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "../../services/apiService";
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
      apiService.getPopularRestaurants(),
      apiService.getSignatureDishes(),
      apiService.getChefOfTheWeek(),
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
