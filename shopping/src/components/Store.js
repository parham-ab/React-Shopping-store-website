import React, { useContext } from "react";
import { Box } from "@mui/material";
// context
import { ProductContext } from "../contexts/ProductContextProvider";
// components
import Products from "./common/Products";
import Loading from "./Loading";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <Box component="div" className="store-container">
      {products.length ? (
        products.map((product) => (
          <Products key={product.id} productData={product} />
        ))
      ) : (
        <Box component="div" className="loading-container">
          <Loading />
        </Box>
      )}
    </Box>
  );
};

export default Store;
