import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// functions
import { isSelected, quantityCount } from "../helper/functions";
// icons
import { BsFillTrashFill } from "react-icons/bs";
// context
import { CardContext } from "../contexts/CardContextProvider";
// components
import Loading from "./Loading";

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
                of this product left!
              </p>
            </div>
            <div>
              <div className="btn-container"></div>

              {quantityCount(state, currentProduct.id) > 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: currentProduct })
                  }
                >
                  -
                </button>
              )}
              {quantityCount(state, currentProduct.id) === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: currentProduct })
                  }
                >
                  <BsFillTrashFill />
                </button>
              )}
              {quantityCount(state, currentProduct.id) > 0 && (
                <span>{quantityCount(state, currentProduct.id)}</span>
              )}
              {isSelected(state, currentProduct.id) ? (
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: currentProduct })
                  }
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: currentProduct })
                  }
                >
                  add to card
                </button>
              )}
            </div>
            <Link to="/products">Back to store</Link>
          </div>
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
