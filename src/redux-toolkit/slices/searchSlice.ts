import { createSlice } from "@reduxjs/toolkit";
import { searchAll } from "../thunks/searchThunk";

import { Section, ChefData } from "../../models/types";

interface SearchState {
  chefs: ChefData[];
  dishes: Section;
  restaurants: Section;
  loading: boolean;
  error: string | null;
  isSearchActive: boolean;
}

const initialState: SearchState = {
  chefs: [],
  dishes: { title: "", cards: [] },
  restaurants: { title: "", cards: [] },
  loading: false,
  error: null,
  isSearchActive: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchAll.fulfilled, (state, action) => {
      state.loading = false;
      state.chefs = action.payload.searchedChefs;
      state.dishes = action.payload.searchedDishes;
      state.restaurants = action.payload.searchedRestaurants;
      state.isSearchActive = true;
    });
    builder.addCase(searchAll.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.isSearchActive = false;
    });
  },
});

export default searchSlice.reducer;
