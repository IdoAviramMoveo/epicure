import { apiService } from "../../services/apiService";

export interface BackendRestaurant {
  _id: string;
  title: string;
  image: string;
  chef: { title: string };
  rating: number;
  dishes: string[];
}

class RestaurantAdapter {
  static readonly endpoint = "/restaurants";
  async getPopularRestaurants(): Promise<BackendRestaurant[]> {
    const response = await apiService.get<BackendRestaurant[]>(`${RestaurantAdapter.endpoint}/popular`);
    return response.data;
  }
}

export const restaurantAdapter = new RestaurantAdapter();
