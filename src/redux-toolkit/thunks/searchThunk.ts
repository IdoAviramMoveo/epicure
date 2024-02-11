import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "../../services/apiService";
import { transformRestaurantData } from "../adapters/restaurantAdapter";
import { transformDishData } from "../adapters/dishAdapter";
import { BackendChef, transformChefData } from "../adapters/chefAdapter";

export const searchAll = createAsyncThunk("search/searchAll", async (searchTerm: string, { rejectWithValue }) => {
  try {
    const response = await apiService.searchAll(searchTerm);
    const searchedRestaurants = transformRestaurantData(response.data.restaurants);
    const searchedDishes = transformDishData(response.data.dishes);
    const searchedChefs = response.data.chefs.map((chef: BackendChef) =>
      transformChefData(chef, { title: "", cards: [] })
    );

    return {
      searchedRestaurants,
      searchedDishes,
      searchedChefs,
    };
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
