import { createAsyncThunk } from "@reduxjs/toolkit";

import { ChefData } from "../../models/types";
import { chefAdapter } from "../adapters/chefAdapter";
import { transformChefData } from "../../utils/redux-utils";

interface ChefsPageData {
  chefs: ChefData[];
}

export const fetchChefsPageData = createAsyncThunk("chefs/fetchData", async (): Promise<ChefsPageData> => {
  const response = await chefAdapter.getAllChefs();
  return {
    chefs: transformChefData(response),
  };
});
