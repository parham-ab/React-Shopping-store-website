import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Avatar, IconButton, Skeleton } from "@mui/material";
// functions
import { isSelected, quantityCount } from "../helper/functions";
// icons
import { BsFillTrashFill } from "react-icons/bs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// context
import { CardContext } from "../contexts/CardContextProvider";
// components
import Loading from "./Loading";
import Banner from "./Banner";

const DetailsPage = () => {
  const { state, dispatch } = useContext(CardContext);
  const [currentProduct, setCurrentProduct] = useState([]);

  const GetCurrentProduct = async () => {
    const BASE_URL = "https://fakestoreapi.com/products";
    const result = await axios.get(`${BASE_URL}/${id}`);
    return result.data;
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setCurrentProduct(await GetCurrentProduct());
    };
    fetchAPI();
  }, []);

  const params = useParams();
  const id = params.id;

  return (
    <div className="details-container">
      {currentProduct.id ? (
        <div className="container">
          <div className="img-container">
            <img src={currentProduct.image} alt={`product/${id}`} />
          </div>
          <div className="information">
            <div className="text-container">
              <p>
                <span className="product-info"> {currentProduct.title}</span>
              </p>
              <p>
                Info:
                <span className="product-info">
                  {" "}
                  {currentProduct.description}
                </span>
              </p>
              <p>
                Category:
                <span className="product-info"> {currentProduct.category}</span>
              </p>
              <p>
                Price:
                <span className="product-info"> ${currentProduct.price}</span>
              </p>
              <div>
                Rate:
                <span className="product-info">
                  {" "}
                  {currentProduct.rating.rate}
                </span>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={currentProduct.rating.rate}
                    precision={0.1}
                    readOnly
                  />
                </Box>
              </div>
              <p>
                <span className="product-info">
                  {currentProduct.rating.count}{" "}
                </span>
                items of this product left!
              </p>
            </div>

            <CardActions>
              {quantityCount(state, currentProduct.id) > 1 && (
                <IconButton
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: currentProduct })
                  }
                  aria-label="RemoveCircleIcon"
                  size="large"
                >
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
              )}
              {quantityCount(state, currentProduct.id) === 1 && (
                <IconButton
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: currentProduct })
                  }
                  color="error"
                  aria-label="delete"
                  size="large"
                >
                  <BsFillTrashFill fontSize="inherit" />
                </IconButton>
              )}
              {quantityCount(state, currentProduct.id) > 0 && (
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#608f57",
                    marginLeft: "7px",
                  }}
                  alt="Remy Sharp"
                >
                  {quantityCount(state, currentProduct.id) > 0 && (
                    <span>{quantityCount(state, currentProduct.id)}</span>
                  )}
                </Avatar>
              )}
              {isSelected(state, currentProduct.id) ? (
                <IconButton
                  aria-label="AddCircleIcon"
                  size="large"
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: currentProduct })
                  }
                >
                  <AddCircleIcon fontSize="inherit" />
                </IconButton>
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: currentProduct })
                  }
                >
                  Add to card
                </Button>
              )}
            </CardActions>
            <Link to="/products">Back to store</Link>
          </div>
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
      <Banner />
    </div>
  );
};

export default DetailsPage;
