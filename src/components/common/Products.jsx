import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CardContext } from "../../contexts/CardContextProvider";
import { isSelected, quantityCount, shorten } from "../../helper/functions";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  const qty = quantityCount(state, productData.id);
  const inCart = isSelected(state, productData.id);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: inCart ? "rgba(108, 99, 255, 0.35)" : "rgba(0,0,0,0.07)",
        boxShadow: inCart
          ? "0 0 0 1px rgba(108,99,255,0.2), 0 4px 20px rgba(108,99,255,0.1)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.25s ease",
        overflow: "hidden",
        background: "#fff",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: inCart
            ? "0 0 0 1px rgba(108,99,255,0.3), 0 12px 32px rgba(108,99,255,0.18)"
            : "0 12px 32px rgba(0,0,0,0.12)",
          borderColor: inCart ? "rgba(108,99,255,0.5)" : "rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image area */}
      <Link
        to={`/products/${productData.id}`}
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(145deg, #f8f8fc 0%, #f0f0f8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={productData.image}
            alt={productData.title}
            loading="lazy"
            sx={{
              width: "auto",
              height: "160px",
              objectFit: "contain",
              transition: "transform 0.35s ease",
              ".MuiCard-root:hover &": {
                transform: "scale(1.06)",
              },
            }}
          />

          {/* In-cart badge */}
          {inCart && (
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6C63FF, #3ECFCF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(108,99,255,0.4)",
              }}
            >
              <Typography
                sx={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}
              >
                {qty}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Content */}
        <CardContent sx={{ px: 2, pt: 2, pb: 0.5 }}>
          <Typography
            component="h3"
            sx={{
              fontSize: "0.82rem",
              fontWeight: 500,
              color: "#333",
              lineHeight: 1.4,
              minHeight: "2.8em",
              mb: 1,
            }}
          >
            {shorten(productData.title)}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a2e",
              letterSpacing: "-0.02em",
            }}
          >
            ${productData.price}
          </Typography>
        </CardContent>
      </Link>

      {/* Actions */}
      <CardActions
        sx={{
          px: 2,
          pb: 2,
          pt: 1.5,
          mt: "auto",
          justifyContent: inCart ? "space-between" : "flex-end",
        }}
      >
        {inCart ? (
          <>
            {/* Quantity controls */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                background: "rgba(108,99,255,0.07)",
                borderRadius: "10px",
                border: "1px solid rgba(108,99,255,0.15)",
                px: 0.5,
                py: 0.25,
              }}
            >
              {qty === 1 ? (
                <IconButton
                  size="small"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: productData })
                  }
                  sx={{
                    color: "#e53935",
                    width: 28,
                    height: 28,
                    "&:hover": { background: "rgba(229,57,53,0.1)" },
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 15 }} />
                </IconButton>
              ) : (
                <IconButton
                  size="small"
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: productData })
                  }
                  sx={{
                    color: "#6C63FF",
                    width: 28,
                    height: 28,
                    "&:hover": { background: "rgba(108,99,255,0.12)" },
                  }}
                >
                  <RemoveIcon sx={{ fontSize: 15 }} />
                </IconButton>
              )}

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  minWidth: "20px",
                  textAlign: "center",
                }}
              >
                {qty}
              </Typography>

              <IconButton
                size="small"
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
                sx={{
                  color: "#6C63FF",
                  width: 28,
                  height: 28,
                  "&:hover": { background: "rgba(108,99,255,0.12)" },
                }}
              >
                <AddIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Box>

            {/* In cart label */}
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#6C63FF",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              In cart
            </Typography>
          </>
        ) : (
          <Button
            fullWidth
            size="small"
            variant="contained"
            startIcon={
              <ShoppingCartOutlinedIcon sx={{ fontSize: "16px !important" }} />
            }
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.82rem",
              py: 1,
              background: "linear-gradient(135deg, #6C63FF 0%, #5a52e0 100%)",
              boxShadow: "0 3px 10px rgba(108,99,255,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #7b74ff 0%, #6C63FF 100%)",
                boxShadow: "0 5px 16px rgba(108,99,255,0.45)",
                transform: "translateY(-1px)",
              },
              "&:active": { transform: "translateY(0)" },
              transition: "all 0.2s ease",
            }}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Products;
