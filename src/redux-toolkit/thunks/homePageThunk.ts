import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Section, ChefData } from "../../models/types";
import { transformRestaurantData } from "../adapters/restaurantAdapter";
import { transformDishData } from "../adapters/dishAdapter";
import { transformChefData } from "../adapters/chefAdapter";

interface HomePageData {
  restaurants: Section;
  dishes: Section;
  chefOfTheWeek: ChefData;
}

export const fetchHomePageData = createAsyncThunk<HomePageData>(
  "homePage/fetchData",
  async (): Promise<HomePageData> => {
    const [restaurantsResponse, dishesResponse, chefOfTheWeekResponse] = await Promise.all([
      axios.get("http://localhost:3000/restaurants"),
      axios.get("http://localhost:3000/dishes"),
      axios.get("http://localhost:3000/chefs/chef-of-the-week"),
    ]);

    const restaurants = transformRestaurantData(restaurantsResponse.data);
    const dishes = transformDishData(dishesResponse.data);

    const chefOfTheWeek: ChefData = transformChefData(
      chefOfTheWeekResponse.data,
      transformRestaurantData(chefOfTheWeekResponse.data.restaurants)
    );

    return {
      restaurants,
      dishes,
      chefOfTheWeek,
    };
  }
);
