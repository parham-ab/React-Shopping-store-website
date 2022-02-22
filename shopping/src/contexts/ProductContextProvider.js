import React, { useEffect, useState } from "react";
// API
import { GetProducts } from "../services/api";
// context
export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await GetProducts());
    };
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
