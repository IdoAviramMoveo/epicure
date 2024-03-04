import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Root from "./pages/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import ChefsPage from "./pages/ChefsPage/ChefsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "restaurants", element: <RestaurantsPage /> },
        { path: "chefs", element: <ChefsPage /> },
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
