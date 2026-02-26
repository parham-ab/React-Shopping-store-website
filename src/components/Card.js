import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Container, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CardContext } from "../contexts/CardContextProvider";

const Card = (props) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity, id } = props.data;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, sm: 3 },
        p: 1,
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "rgba(0,0,0,0.07)",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.22s ease",
        "&:hover": {
          borderColor: "rgba(108,99,255,0.25)",
          boxShadow: "0 6px 24px rgba(108,99,255,0.1)",
          transform: "translateY(-2px)",
        },
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
        mb: 2,
      }}
    >
      {/* Product image */}
      <Box
        sx={{
          width: { xs: 80, sm: 88 },
          height: { xs: 80, sm: 88 },
          flexShrink: 0,
          borderRadius: "12px",
          background: "linear-gradient(145deg, #f8f8fc, #ededf7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          p: 1,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Info */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "#1a1a2e",
              lineHeight: 1.4,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              transition: "color 0.2s",
              "&:hover": { color: "#6C63FF" },
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography
          sx={{
            mt: 0.75,
            fontSize: "1rem",
            fontWeight: 700,
            color: "#1a1a2e",
            letterSpacing: "-0.02em",
          }}
        >
          ${price}
        </Typography>
        <Typography
          sx={{
            mt: 0.25,
            fontSize: "0.75rem",
            color: "rgba(0,0,0,0.38)",
            fontWeight: 500,
          }}
        >
          Subtotal: ${(price * quantity).toFixed(2)}
        </Typography>
      </Box>

      {/* Quantity stepper */}
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
          flexShrink: 0,
        }}
      >
        {quantity === 1 ? (
          <IconButton
            size="small"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
            sx={{
              width: 30,
              height: 30,
              color: "#e53935",
              "&:hover": { background: "rgba(229,57,53,0.1)" },
            }}
          >
            <DeleteIcon sx={{ fontSize: 15 }} />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
            sx={{
              width: 30,
              height: 30,
              color: "#6C63FF",
              "&:hover": { background: "rgba(108,99,255,0.12)" },
            }}
          >
            <RemoveIcon sx={{ fontSize: 15 }} />
          </IconButton>
        )}

        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "#1a1a2e",
            minWidth: "24px",
            textAlign: "center",
          }}
        >
          {quantity}
        </Typography>

        <IconButton
          size="small"
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          sx={{
            width: 30,
            height: 30,
            color: "#6C63FF",
            "&:hover": { background: "rgba(108,99,255,0.12)" },
          }}
        >
          <AddIcon sx={{ fontSize: 15 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Card;
