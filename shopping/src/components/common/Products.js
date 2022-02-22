import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import { BsFillTrashFill } from "react-icons/bs";
// context
import { CardContext } from "../../contexts/CardContextProvider";
// functions
import { isSelected, quantityCount, shorten } from "../../helper/functions";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="product-container">
      <div className="container">
        <Link to={`/products/${productData.id}`}>
          <img src={productData.image} alt={`product-${productData.id}`} />
          <h3>{shorten(productData.title)}</h3>
        </Link>
        <div>
          <div className="product-details">
            <p className="price">${productData.price}</p>
            {quantityCount(state, productData.id) > 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                −
              </button>
            )}
            {quantityCount(state, productData.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <BsFillTrashFill />
              </button>
            )}
            {quantityCount(state, productData.id) > 0 && (
              <span>{quantityCount(state, productData.id)}</span>
            )}
            {isSelected(state, productData.id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                Add to card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
