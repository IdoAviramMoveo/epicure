import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Section } from "../../models/types";
import { fetchRestaurantsPageData } from "../thunks/restaurantsPageThunk";

interface RestaurantsPageState {
  restaurants: Section;
}

const initialState: RestaurantsPageState = {
  restaurants: { title: "", cards: [] },
};

const restaurantsPageSlice = createSlice({
  name: "restaurantsPage",
  initialState,
  reducers: {
    setRestaurantsData(state, action: PayloadAction<Section>) {
      state.restaurants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsPageData.fulfilled, (state, action) => {
      state.restaurants = action.payload.restaurants;
    });
  },
});

export const { setRestaurantsData } = restaurantsPageSlice.actions;

export default restaurantsPageSlice.reducer;
