import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Section, ChefData } from "../../models/types";
import { transformRestaurantData } from "../adapters/restaurantAdapter";
import { transformDishData } from "../adapters/dishAdapter";
import { transformChefData } from "../adapters/chefAdapter";
import { BackendChef } from "../adapters/chefAdapter";

interface HomePageData {
  restaurants: Section;
  dishes: Section;
  chefOfTheWeek: ChefData;
}

const defaultChefData: ChefData = {
  title: "Chef Of The Week:",
  chefName: "Default Chef",
  image: "",
  chefDescription: "Default description",
  restaurants: {
    title: "",
    cards: [],
  },
};

export const fetchHomePageData = createAsyncThunk<HomePageData>("homePage/fetchData", async (_, { getState }) => {
  const [restaurantsResponse, dishesResponse, chefsResponse] = await Promise.all([
    axios.get("http://localhost:3000/restaurants"),
    axios.get("http://localhost:3000/dishes"),
    axios.get("http://localhost:3000/chefs"),
  ]);

  const restaurants = transformRestaurantData(restaurantsResponse.data);
  const dishes = transformDishData(dishesResponse.data);

  const chefOfTheWeekBackendData = chefsResponse.data.find((chef: BackendChef) => chef.title === "Yossi Shitrit");

  const chefRestaurantsResponse = await axios.get(
    `http://localhost:3000/chefs/${chefOfTheWeekBackendData._id}/with-restaurants`
  );
  const chefOfTheWeekRestaurants = transformRestaurantData(chefRestaurantsResponse.data.restaurants);

  const chefOfTheWeek = chefOfTheWeekBackendData
    ? transformChefData(chefOfTheWeekBackendData, chefOfTheWeekRestaurants)
    : defaultChefData;

  return {
    restaurants,
    dishes,
    chefOfTheWeek,
  };
});
