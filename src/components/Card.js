import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, Container, Grid } from "@mui/material";
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
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          border: "solid 1px #dfdfdf",
          borderRadius: "10px",
          padding: "20px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
        my={5}
      >
        <img
          style={{ width: "80px" }}
          src={image}
          alt="product"
          className="productImage"
        />
        <Box component="div" className="data">
          <Link to={`/products/${id}`}>
            <Typography variant="h6" fontWeight="bold" color="initial">
              {title}
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "#590087" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
              color="error"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          )}
          <Typography variant="body1" color="text.secondary" px={0.6}>
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
      </Grid>
    </Container>
  );
};

export default Card;
