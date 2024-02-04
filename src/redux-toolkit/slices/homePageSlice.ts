import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import RestaurantsData from "../../constants/RestaurantsData";
import DishesData from "../../constants/DishesData";
import ChefOfTheWeekData from "../../constants/ChefOfTheWeekData";
import { Section, ChefData } from "../../models/types";

interface HomePageState {
  restaurants: Section;
  dishes: Section;
  chefOfTheWeek: ChefData;
}

const initialState: HomePageState = {
  restaurants: RestaurantsData,
  dishes: DishesData,
  chefOfTheWeek: ChefOfTheWeekData,
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setRestaurantsData(state, action: PayloadAction<Section>) {
      state.restaurants = action.payload;
    },
    setDishesData(state, action: PayloadAction<Section>) {
      state.dishes = action.payload;
    },
    setChefOfTheWeekData(state, action: PayloadAction<ChefData>) {
      state.chefOfTheWeek = action.payload;
    },
  },
});

export const { setRestaurantsData, setDishesData, setChefOfTheWeekData } = homePageSlice.actions;

export default homePageSlice.reducer;
