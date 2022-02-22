import React, { useContext } from "react";
// context
import { ProductContext } from "../contexts/ProductContextProvider";
// components
import Products from "./common/Products";
import Loading from "./Loading";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div className="store-container">
      {products.length ? (
        products.map((product) => (
          <Products key={product.id} productData={product} />
        ))
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Store;
