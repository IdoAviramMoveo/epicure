import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Root from "./pages/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import ChefsPage from "./pages/ChefsPage/ChefsPage";
import SearchedCards from "./components/SearchedCards/SearchedCards";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "restaurants", element: <RestaurantsPage /> },
        { path: "chefs", element: <ChefsPage /> },
        { path: "search", element: <SearchedCards /> },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
