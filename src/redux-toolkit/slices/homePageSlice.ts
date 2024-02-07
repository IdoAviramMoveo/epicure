import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Section, ChefData } from "../../models/types";
import { fetchHomePageData } from "../thunks/homePageThunk";

interface HomePageState {
  restaurants: Section;
  dishes: Section;
  chefsOfTheWeek: ChefData[];
}

const initialState: HomePageState = {
  restaurants: { title: "", cards: [] },
  dishes: { title: "", cards: [] },
  chefsOfTheWeek: [],
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
    setChefOfTheWeekData(state, action: PayloadAction<ChefData[]>) {
      state.chefsOfTheWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.restaurants = action.payload.restaurants;
      state.dishes = action.payload.dishes;
      state.chefsOfTheWeek = action.payload.chefsOfTheWeek;
    });
  },
});

export const { setRestaurantsData, setDishesData, setChefOfTheWeekData } = homePageSlice.actions;

export default homePageSlice.reducer;
