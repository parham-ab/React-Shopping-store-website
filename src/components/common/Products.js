import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Chip,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// context
import { CardContext } from "../../contexts/CardContextProvider";
// functions
import { isSelected, quantityCount, shorten } from "../../helper/functions";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <Card
      sx={{
        transition: "all 0.3s",
        "&:hover": {
          transition: " all 0.3s",
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        },
      }}
    >
      <Link to={`/products/${productData.id}`}>
        <CardMedia component="div">
          <img
            src={productData.image}
            alt={productData.id}
            loading="lazy"
            style={{
              width: "200px",
              height: "200px",
              display: "flex",
              margin: "0 auto",
              padding: "8px",
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            component="h3"
            color="text.secondary"
            sx={{ padding: "10px" }}
          >
            {shorten(productData.title)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            className="price"
          >
            ${productData.price}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        {quantityCount(state, productData.id) > 1 && (
          <IconButton
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
            aria-label="RemoveCircleIcon"
            size="medium"
          >
            <RemoveCircleIcon fontSize="inherit" />
          </IconButton>
        )}
        {quantityCount(state, productData.id) === 1 && (
          <IconButton
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
            color="error"
            aria-label="delete"
            size="medium"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        )}
        {quantityCount(state, productData.id) > 0 && (
          <Chip
            size="small"
            variant="outlined"
            color="info"
            label={
              quantityCount(state, productData.id) > 0 && (
                <span>{quantityCount(state, productData.id)}</span>
              )
            }
            sx={{ ml: 1 }}
          />
        )}
        {isSelected(state, productData.id) ? (
          <IconButton
            aria-label="AddCircleIcon"
            size="medium"
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        ) : (
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to card
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Products;