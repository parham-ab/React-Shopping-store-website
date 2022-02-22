import React, { useContext } from "react";
// icons
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// context
import { CardContext } from "../contexts/CardContextProvider";

const Card = (props) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity, id } = props.data;
  return (
    <div className="cards-container">
      <div className="container">
        <img
          style={{ width: "100px" }}
          src={image}
          alt="product"
          className="productImage"
        />
        <div className="data">
          <Link to={`/products/${id}`}>
            <h5>{title}</h5>
          </Link>
          <p>${price}</p>
        </div>
        {/* buttons */}
        <div>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <BsFillTrashFill />
            </button>
          )}
          <span>{quantity}</span>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
