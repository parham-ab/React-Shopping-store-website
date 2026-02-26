import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Typography,
  Container,
  Rating,
  Button,
  Box,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ProductDetailsSkeleton from "./components/ProductDetailsSkeleton";
import ProductInfo from "./components/ProductInfo";
import { CardContext } from "../../contexts/CardContextProvider";
import { GetSingleProducts } from "../../services/getSingleProducts";
import Banner from "./components/Banner";
import { isSelected, quantityCount } from "../../helper/functions";

const ProductDetailsPage = () => {
  const { state, dispatch } = useContext(CardContext);
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await GetSingleProducts(id);
      setCurrentProduct(data);
    };
    fetchAPI();
  }, [id]);

  const qty = currentProduct ? quantityCount(state, currentProduct.id) : 0;
  const inCart = currentProduct ? isSelected(state, currentProduct.id) : false;

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        {/* Back link */}
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              mb: 4,
              color: "#6C63FF",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "gap 0.2s ease",
              "&:hover": { gap: 1.25 },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Back to Store
          </Box>
        </Link>

        {!currentProduct ? (
          <ProductDetailsSkeleton />
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 8 },
              alignItems: "start",
            }}
          >
            {/* Image container */}
            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: 88 },
                borderRadius: "24px",
                background: "linear-gradient(145deg, #f8f8fc 0%, #ededf7 100%)",
                border: "1px solid rgba(108,99,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 280, md: 420 },
                overflow: "hidden",
                p: 4,
              }}
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "340px",
                  objectFit: "contain",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>

            {/* Info panel */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {/* Category chip */}
              <Chip
                label={currentProduct.category}
                size="small"
                sx={{
                  alignSelf: "flex-start",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  background: "rgba(108,99,255,0.08)",
                  color: "#6C63FF",
                  border: "1px solid rgba(108,99,255,0.2)",
                  borderRadius: "8px",
                }}
              />

              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.35,
                }}
              >
                {currentProduct.title}
              </Typography>

              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Rating
                  value={currentProduct.rating.rate}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#6C63FF" },
                    "& .MuiRating-iconEmpty": { color: "rgba(108,99,255,0.2)" },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#1a1a2e",
                  }}
                >
                  {currentProduct.rating.rate}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.78rem", color: "rgba(0,0,0,0.38)" }}
                >
                  ({currentProduct.rating.count} in stock)
                </Typography>
              </Box>

              {/* Price */}
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #6C63FF, #3ECFCF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ${currentProduct.price}
              </Typography>

              <Divider sx={{ borderColor: "rgba(0,0,0,0.07)" }} />

              {/* Description */}
              <ProductInfo label="About">
                <Typography
                  sx={{
                    fontSize: "0.87rem",
                    color: "rgba(0,0,0,0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  {currentProduct.description}
                </Typography>
              </ProductInfo>

              <Divider sx={{ borderColor: "rgba(0,0,0,0.07)" }} />

              {/* Cart controls */}
              {inCart ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {/* Stepper */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      background: "rgba(108,99,255,0.06)",
                      borderRadius: "12px",
                      border: "1px solid rgba(108,99,255,0.14)",
                      px: 0.75,
                      py: 0.5,
                    }}
                  >
                    {qty === 1 ? (
                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_ITEM",
                            payload: currentProduct,
                          })
                        }
                        sx={{
                          width: 34,
                          height: 34,
                          color: "#e53935",
                          "&:hover": { background: "rgba(229,57,53,0.1)" },
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: 17 }} />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE",
                            payload: currentProduct,
                          })
                        }
                        sx={{
                          width: 34,
                          height: 34,
                          color: "#6C63FF",
                          "&:hover": { background: "rgba(108,99,255,0.12)" },
                        }}
                      >
                        <RemoveIcon sx={{ fontSize: 17 }} />
                      </IconButton>
                    )}
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1a1a2e",
                        minWidth: 28,
                        textAlign: "center",
                      }}
                    >
                      {qty}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: currentProduct })
                      }
                      sx={{
                        width: 34,
                        height: 34,
                        color: "#6C63FF",
                        "&:hover": { background: "rgba(108,99,255,0.12)" },
                      }}
                    >
                      <AddIcon sx={{ fontSize: 17 }} />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#6C63FF",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    In cart · ${(currentProduct.price * qty).toFixed(2)}
                  </Typography>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlinedIcon />}
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: currentProduct })
                  }
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    px: 4,
                    py: 1.4,
                    background:
                      "linear-gradient(135deg, #6C63FF 0%, #5a52e0 100%)",
                    boxShadow: "0 4px 14px rgba(108,99,255,0.35)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #7b74ff 0%, #6C63FF 100%)",
                      boxShadow: "0 6px 20px rgba(108,99,255,0.45)",
                      transform: "translateY(-1px)",
                    },
                    "&:active": { transform: "translateY(0)" },
                    transition: "all 0.2s ease",
                  }}
                >
                  Add to Cart
                </Button>
              )}

              {/* Trust badges */}
              <Box sx={{ display: "flex", gap: 2.5, mt: 1 }}>
                {[
                  {
                    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 15 }} />,
                    label: "Free shipping",
                  },
                  {
                    icon: <VerifiedOutlinedIcon sx={{ fontSize: 15 }} />,
                    label: "Quality guaranteed",
                  },
                ]?.map(({ icon, label }) => (
                  <Box
                    key={label}
                    sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                  >
                    <Box sx={{ color: "#6C63FF" }}>{icon}</Box>
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.4)",
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Banner />
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
