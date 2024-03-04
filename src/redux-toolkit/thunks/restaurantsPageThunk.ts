import { createAsyncThunk } from "@reduxjs/toolkit";

import { restaurantAdapter } from "../adapters/restaurantAdapter";
import { Section } from "../../models/types";
import { transformRestaurantData } from "../../utils/redux-utils";

interface RestaurantsPageData {
  restaurants: Section;
}

export const fetchRestaurantsPageData = createAsyncThunk("restaurants/fetchData", async (): Promise<RestaurantsPageData> => {
  const response = await restaurantAdapter.getAllRestaurants();
  return {
    restaurants: transformRestaurantData(response, "RESTAURANTS"),
  };
});
