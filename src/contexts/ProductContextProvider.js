import React, { useEffect, useState } from "react";
// API
import { GetAllProducts } from "../services/getAllProducts";
// context
export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await GetAllProducts());
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