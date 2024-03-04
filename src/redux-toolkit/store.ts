import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./slices/homePageSlice";
import searchReducer from "./slices/searchSlice";
import restaurantsPageReducer from "./slices/restaurantsPageSlice";

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    search: searchReducer,
    restaurantsPage: restaurantsPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
