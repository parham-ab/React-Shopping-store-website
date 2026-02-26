import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Chip,
  IconButton,
  Typography,
  Container,
  Grid,
  Rating,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { isSelected, quantityCount } from "../helper/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CardContext } from "../contexts/CardContextProvider";
import Loading from "./Loading";
import Banner from "./Banner";
import { GetSingleProducts } from "../services/getSingleProducts";

const DetailsPage = () => {
  const { state, dispatch } = useContext(CardContext);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCurrentProduct(await GetSingleProducts(id));
    };
    fetchAPI();
  }, []);

  const params = useParams();
  const id = params.id;

  return (
    <Container maxWidth="lg">
      <Grid container>
        {currentProduct.id ? (
          <Box
            display="flex"
            alignItems="center"
            mt={10}
            sx={{
              margin: "auto",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6} mt={10}>
              <img
                src={currentProduct.image}
                alt={`product/${id}`}
                width={"190px"}
              />
            </Grid>
            <Grid item xs={12} my={7}>
              <Box
                component="div"
                mt={5}
                sx={{
                  border: "solid 1px #dfdfdf",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Typography variant="body1" color="text.secondary" mb={4}>
                  {currentProduct.title}
                </Typography>

                <Box component="div" display="flex">
                  <Typography
                    component="p"
                    variant="body1"
                    color="primary"
                    fontWeight={700}
                    display="flex"
                    mr={1}
                  >
                    Info:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {currentProduct.description}
                  </Typography>
                </Box>

                <Box component="div" display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    color="primary"
                    fontWeight={700}
                    sx={{ lineHeight: 3 }}
                    display="flex"
                    alignItems="center"
                    mr={1}
                  >
                    Category:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {currentProduct.category}
                  </Typography>
                </Box>

                <Box component="div" display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    color="primary"
                    fontWeight={700}
                    sx={{ lineHeight: 3 }}
                    display="flex"
                    alignItems="center"
                    mr={1}
                  >
                    Price:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    ${currentProduct.price}
                  </Typography>
                </Box>

                <Box component="div" display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    color="primary"
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    sx={{ lineHeight: 3 }}
                    mr={1}
                  >
                    Rate:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {currentProduct.rating.rate}
                  </Typography>
                  <Rating
                    sx={{ marginLeft: 1 }}
                    name="half-rating-read"
                    defaultValue={currentProduct.rating.rate}
                    precision={0.1}
                    readOnly
                  />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={400}
                  sx={{ lineHeight: 1 }}
                >
                  {currentProduct.rating.count} items of this product left!
                </Typography>

                <CardActions>
                  {quantityCount(state, currentProduct.id) > 1 && (
                    <IconButton
                      onClick={() =>
                        dispatch({
                          type: "DECREASE",
                          payload: currentProduct,
                        })
                      }
                      aria-label="RemoveCircleIcon"
                      size="medium"
                    >
                      <RemoveCircleIcon fontSize="inherit" />
                    </IconButton>
                  )}
                  {quantityCount(state, currentProduct.id) === 1 && (
                    <IconButton
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: currentProduct,
                        })
                      }
                      color="error"
                      aria-label="delete"
                      size="medium"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  )}
                  {quantityCount(state, currentProduct.id) > 0 && (
                    <Chip
                      size="small"
                      variant="outlined"
                      color="info"
                      sx={{ ml: 1 }}
                      label={
                        quantityCount(state, currentProduct.id) > 0 && (
                          <span>{quantityCount(state, currentProduct.id)}</span>
                        )
                      }
                    />
                  )}
                  {isSelected(state, currentProduct.id) ? (
                    <IconButton
                      aria-label="AddCircleIcon"
                      size="medium"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE",
                          payload: currentProduct,
                        })
                      }
                    >
                      <AddCircleIcon fontSize="inherit" />
                    </IconButton>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() =>
                        dispatch({
                          type: "ADD_ITEM",
                          payload: currentProduct,
                        })
                      }
                    >
                      Add to card
                    </Button>
                  )}
                </CardActions>
                <Link
                  to="/products"
                  style={{
                    display: "flex",
                    width: "fit-content",
                    marginTop: "15px",
                    color: "#00000099",
                  }}
                >
                  <ArrowBackIosIcon />
                  <Typography>Back to store</Typography>
                </Link>
              </Box>
            </Grid>
          </Box>
        ) : (
          <Grid item xs={12}>
            <Loading />
          </Grid>
        )}
      </Grid>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Banner />
      </Box>
    </Container>
  );
};

export default DetailsPage;
