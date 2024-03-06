import { apiService } from "../../services/apiService";
import { BackendRestaurant } from "./restaurantAdapter";

export interface BackendChef {
  _id: string;
  title: string;
  image: string;
  description: string;
  restaurants: BackendRestaurant[];
  isChefOfTheWeek: boolean;
}

class ChefAdapter {
  static readonly endpoint = "/chefs";
  async getChefOfTheWeek(): Promise<BackendChef> {
    const response = await apiService.get<BackendChef>(`${ChefAdapter.endpoint}/chef-of-the-week`);
    return response.data;
  }
  async getAllChefs(): Promise<BackendChef[]> {
    const response = await apiService.get<BackendChef[]>(`${ChefAdapter.endpoint}`);
    return response.data;
  }
}

export const chefAdapter = new ChefAdapter();
