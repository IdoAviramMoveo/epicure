import { apiService } from "../../services/apiService";
import { BackendRestaurant } from "./restaurantAdapter";
import { BackendDish } from "./dishAdapter";
import { BackendChef } from "./chefAdapter";

export interface SearchResponse {
  restaurants: BackendRestaurant[];
  dishes: BackendDish[];
  chefs: BackendChef[];
}

class SearchAdapter {
  static readonly endpoint = "/search?term=";
  async searchAll(searchTerm: string): Promise<SearchResponse> {
    const response = await apiService.get<SearchResponse>(`${SearchAdapter.endpoint}${searchTerm}`);
    return response.data;
  }
}

export const searchAdapter = new SearchAdapter();
