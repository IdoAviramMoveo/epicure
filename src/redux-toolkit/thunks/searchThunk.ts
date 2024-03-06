import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchAdapter } from "../adapters/searchAdapter";
import { transformRestaurantData } from "../../utils/redux-utils";
import { transformDishData } from "../../utils/redux-utils";
import { transformChefOfTheWeekData } from "../../utils/redux-utils";

export const searchAll = createAsyncThunk("search/searchAll", async (searchTerm: string, { rejectWithValue }) => {
  try {
    const { restaurants, dishes, chefs } = await searchAdapter.searchAll(searchTerm);

    const searchedRestaurants = transformRestaurantData(restaurants);
    const searchedDishes = transformDishData(dishes);
    const searchedChefs = chefs.map((chef) => transformChefOfTheWeekData(chef, { title: "", cards: [] }));

    return {
      searchedRestaurants,
      searchedDishes,
      searchedChefs,
    };
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});
