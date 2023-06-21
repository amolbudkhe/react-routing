import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<ProductsPage />}></Route>
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId/details", element: <ProductDetails /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

// const router = createBrowserRouter(routeDefinations);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
