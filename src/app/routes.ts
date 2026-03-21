import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { InfrastructurePage } from "./pages/InfrastructurePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CartPage } from "./pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "products/:id", Component: ProductDetailPage },
      { path: "infrastructure", Component: InfrastructurePage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "cart", Component: CartPage },
    ],
  },
]);
