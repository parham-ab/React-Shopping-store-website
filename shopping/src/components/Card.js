import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import { BsFillTrashFill } from "react-icons/bs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
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
            <IconButton
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
              aria-label="RemoveCircleIcon"
              size="small"
            >
              <RemoveCircleIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
              aria-label="RemoveCircleIcon"
              size="small"
            >
              <BsFillTrashFill fontSize="inherit" />
            </IconButton>
          )}

          <span>{quantity}</span>
          <IconButton
            aria-label="AddCircleIcon"
            size="small"
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
