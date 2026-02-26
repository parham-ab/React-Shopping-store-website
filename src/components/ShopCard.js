import { useContext } from "react";
import swal from "sweetalert";
import { Box, Typography, Button, Divider, Container } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "./Card";
import { CardContext } from "../contexts/CardContextProvider";
import BackLink from "./BackLink";
import OrderSummary from "./OrderSummary";

const ShopCard = () => {
  const { state } = useContext(CardContext);

  // Checkout success state
  if (state.checkout) {
    swal({ text: "Checked Out Successfully!", icon: "success" });
    return (
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6C63FF, #3ECFCF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(108,99,255,0.35)",
            }}
          >
            <CheckCircleOutlineIcon sx={{ fontSize: 42, color: "#fff" }} />
          </Box>
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            Order Placed!
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.45)", fontSize: "0.9rem" }}>
            Your checkout was successful. Thank you for your purchase.
          </Typography>
          <BackLink label="Continue Shopping" />
        </Box>
      </Container>
    );
  }

  // Empty cart state
  if (!state.checkout && state.itemsCounter === 0) {
    return (
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(108,99,255,0.08)",
              border: "2px dashed rgba(108,99,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 36, color: "rgba(108,99,255,0.5)" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            Your cart is empty
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: "0.88rem" }}>
            Looks like you haven't added anything yet.
          </Typography>
          <BackLink label="Browse Products" />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          mb: 8,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 320px" },
          gap: { xs: 4, md: 5 },
          alignItems: "start",
        }}
      >
        {/* Left: cart items */}
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#1a1a2e",
              mb: 3,
            }}
          >
            Cart
            <Typography
              component="span"
              sx={{
                ml: 1.5,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#6C63FF",
                background: "rgba(108,99,255,0.1)",
                borderRadius: "20px",
                px: 1.2,
                py: 0.3,
                verticalAlign: "middle",
              }}
            >
              {state.itemsCounter} {state.itemsCounter === 1 ? "item" : "items"}
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {state.selectedItems.map((item) => (
              <Card key={item?.id} data={item} />
            ))}
          </Box>
        </Box>

        {/* Right: order summary */}
        <OrderSummary />
      </Box>
    </Container>
  );
};

export default ShopCard;
