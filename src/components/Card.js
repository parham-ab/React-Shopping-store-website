import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// context
import { CardContext } from "../contexts/CardContextProvider";

const Card = (props) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity, id } = props.data;

  return (
    <Box component="div" className="cards-container">
      <Box component="div" className="container">
        <img
          style={{ width: "100px" }}
          src={image}
          alt="product"
          className="productImage"
        />
        <Box component="div" className="data">
          <Link to={`/products/${id}`}>
            <Typography variant="h5" color="initial">
              {title}
            </Typography>
          </Link>
          <Typography variant="body1" color="initial">
            {title}
          </Typography>
          <Typography variant="body1" color="initial">
            ${price}
          </Typography>
        </Box>
        {/* buttons */}
        <Box component="div" display="flex" alignItems="center">
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
              color='error'
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          )}
          <Typography variant="body1" color="text.secondary">
            {quantity}
          </Typography>
          <IconButton
            aria-label="AddCircleIcon"
            size="small"
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
