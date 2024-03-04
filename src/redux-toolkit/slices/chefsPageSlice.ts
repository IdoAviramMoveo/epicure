import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChefData } from "../../models/types";
import { fetchChefsPageData } from "../thunks/chefsPageThunk";

interface ChefsPageState {
  chefs: ChefData[];
}

const initialState: ChefsPageState = {
  chefs: [],
};

const chefsPageSlice = createSlice({
  name: "chefsPage",
  initialState,
  reducers: {
    setChefsData(state, action: PayloadAction<ChefData[]>) {
      state.chefs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChefsPageData.fulfilled, (state, action) => {
      state.chefs = action.payload.chefs;
    });
  },
});

export const { setChefsData } = chefsPageSlice.actions;

export default chefsPageSlice.reducer;
