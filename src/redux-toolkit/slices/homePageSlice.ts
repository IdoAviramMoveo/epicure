import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Section, ChefData } from "../../models/types";
import { fetchHomePageData } from "../thunks/homePageThunk";

interface HomePageState {
  popularRestaurants: Section;
  signatureDishes: Section;
  chefOfTheWeek: ChefData;
}

const initialState: HomePageState = {
  popularRestaurants: { title: "", cards: [] },
  signatureDishes: { title: "", cards: [] },
  chefOfTheWeek: {
    title: "",
    chefName: "",
    image: "",
    chefDescription: "",
    restaurants: { title: "", cards: [] },
  },
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularRestaurantsData(state, action: PayloadAction<Section>) {
      state.popularRestaurants = action.payload;
    },
    setSignatureDishesData(state, action: PayloadAction<Section>) {
      state.signatureDishes = action.payload;
    },
    setChefOfTheWeekData(state, action: PayloadAction<ChefData>) {
      state.chefOfTheWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload.popularRestaurants;
      state.signatureDishes = action.payload.signatureDishes;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  },
});

export const { setPopularRestaurantsData, setSignatureDishesData, setChefOfTheWeekData } = homePageSlice.actions;

export default homePageSlice.reducer;
