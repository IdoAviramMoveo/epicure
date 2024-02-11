import { apiService } from "../../services/apiService";

export interface BackendDish {
  _id: string;
  title: string;
  image: string;
  ingredients: string[];
  tags: string[];
  price: number;
  restaurant: string;
}

class DishAdapter {
  static readonly endpoint = "/dishes";
  async getSignatureDishes(): Promise<BackendDish[]> {
    const response = await apiService.get<BackendDish[]>(`${DishAdapter.endpoint}/signature`);
    return response.data;
  }
}

export const dishAdapter = new DishAdapter();
