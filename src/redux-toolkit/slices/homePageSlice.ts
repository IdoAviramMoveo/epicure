import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Section, ChefData, CardProps } from "../../models/types";
import { fetchHomePageData } from "../thunks/homePageThunk";

interface HomePageState {
  popularRestaurants: Section;
  signatureDishes: Section;
  chefOfTheWeek: ChefData;
  isModalOpen: boolean;
  selectedCard: CardProps | null;
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
  isModalOpen: false,
  selectedCard: null,
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
    openModal: (state, action: PayloadAction<CardProps>) => {
      state.isModalOpen = true;
      state.selectedCard = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedCard = null;
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

export const { setPopularRestaurantsData, setSignatureDishesData, setChefOfTheWeekData, openModal, closeModal } = homePageSlice.actions;

export default homePageSlice.reducer;
