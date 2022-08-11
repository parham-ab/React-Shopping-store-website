import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CardContextProvider from "./contexts/CardContextProvider";
// components
import Store from "./components/Store";
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/common/Navbar";
import ShopCard from "./components/ShopCard";

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/cards" element={<ShopCard />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
