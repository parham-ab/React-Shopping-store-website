import { Navigate, Route, Routes } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CardContextProvider from "./contexts/CardContextProvider";
import Layout from "./components/Layout";
import ProductsPage from "./pages/products";
import ShoppingCard from "./pages/shopping-card";
import ProductDetailsPage from "./pages/product-details";

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Layout>
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cards" element={<ShoppingCard />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </Layout>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
