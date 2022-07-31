import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Avatar, IconButton, Skeleton } from "@mui/material";
// icons
import { BsFillTrashFill } from "react-icons/bs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// context
import { CardContext } from "../../contexts/CardContextProvider";
// functions
import { isSelected, quantityCount, shorten } from "../../helper/functions";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <Box component="div" className="product-container">
      <Box component="div" className="container">
        <Box sx={{ width: "290px", margin: "40px 0" }}>
          {productData ? (
            <Card>
              <Box component="div">
                <Link to={`/products/${productData.id}`}>
                  <CardMedia component="div">
                    {productData.image ? (
                      <img
                        src={productData.image}
                        alt={productData.id}
                        loading="lazy"
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width={"250px"}
                        height={"250px"}
                        sx={{ bgcolor: "grey.900" }}
                      />
                    )}
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
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
              </Box>

              <CardActions>
                {quantityCount(state, productData.id) > 1 && (
                  <IconButton
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: productData })
                    }
                    aria-label="RemoveCircleIcon"
                    size="large"
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
                    size="large"
                  >
                    <BsFillTrashFill fontSize="inherit" />
                  </IconButton>
                )}
                {quantityCount(state, productData.id) > 0 && (
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: "#608f57",
                      marginLeft: "7px",
                    }}
                    alt="Remy Sharp"
                  >
                    {quantityCount(state, productData.id) > 0 && (
                      <span>{quantityCount(state, productData.id)}</span>
                    )}
                  </Avatar>
                )}
                {isSelected(state, productData.id) ? (
                  <IconButton
                    aria-label="AddCircleIcon"
                    size="large"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: productData })
                    }
                  >
                    <AddCircleIcon fontSize="inherit" />
                  </IconButton>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: productData })
                    }
                  >
                    Add to card
                  </Button>
                )}
              </CardActions>
            </Card>
          ) : (
            <Skeleton
              variant="rectangular"
              width={"250px"}
              height={"250px"}
              sx={{ bgcolor: "grey.900" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
