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

export const fetchHomePageData = createAsyncThunk<HomePageData>("homePage/fetchData", async () => {
  const [restaurantsResponse, dishesResponse, chefsResponse] = await Promise.all([
    axios.get("http://localhost:3000/restaurants"),
    axios.get("http://localhost:3000/dishes"),
    axios.get("http://localhost:3000/chefs"),
  ]);

  const restaurants = transformRestaurantData(restaurantsResponse.data);
  const dishes = transformDishData(dishesResponse.data);

  const chefsOfTheWeekPromises = chefsResponse.data
    .filter((chef: BackendChef) => chef.canBeChefOfTheWeek)
    .map(async (chef: BackendChef) => {
      const chefRestaurantsResponse = await axios.get(`http://localhost:3000/chefs/${chef._id}/with-restaurants`);
      return transformChefData(chef, transformRestaurantData(chefRestaurantsResponse.data.restaurants));
    });

  const chefsOfTheWeek = await Promise.all(chefsOfTheWeekPromises);

  const chefOfTheWeek: ChefData = chefsOfTheWeek[Math.floor(Math.random() * chefsOfTheWeek.length)];

  return {
    restaurants,
    dishes,
    chefOfTheWeek,
  };
});
