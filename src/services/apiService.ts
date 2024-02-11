import axios from "axios";

const URL = "http://localhost:3000";

export const apiService = {
  getPopularRestaurants() {
    return axios.get(`${URL}/restaurants/popular`);
  },
  getSignatureDishes() {
    return axios.get(`${URL}/dishes/signature`);
  },
  getChefOfTheWeek() {
    return axios.get(`${URL}/chefs/chef-of-the-week`);
  },
  searchAll(searchTerm: string) {
    return axios.get(`${URL}/search?term=${searchTerm}`);
  },
};
