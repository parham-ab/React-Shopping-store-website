import { Box, Button, Divider, Typography } from "@mui/material";
import StatRow from "./StatRow";
import { useContext } from "react";
import { CardContext } from "../../../contexts/CardContextProvider";

const OrderSummary = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <Box
      sx={{
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.08)",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        p: 2,
        position: { md: "sticky" },
        top: { md: 88 },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#1a1a2e",
          mb: 2.5,
        }}
      >
        Order Summary
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <StatRow label="Items" value={state.itemsCounter} />
        <StatRow label="Shipping" value="Free" />
      </Box>

      <Divider sx={{ my: 2.5, borderColor: "rgba(0,0,0,0.07)" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e" }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #6C63FF, #3ECFCF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ${state.total}
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={() => dispatch({ type: "CHECKOUT" })}
        sx={{
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: "0.95rem",
          py: 1.4,
          background: "linear-gradient(135deg, #6C63FF 0%, #5a52e0 100%)",
          boxShadow: "0 4px 14px rgba(108,99,255,0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #7b74ff 0%, #6C63FF 100%)",
            boxShadow: "0 6px 20px rgba(108,99,255,0.45)",
            transform: "translateY(-1px)",
          },
          "&:active": { transform: "translateY(0)" },
          transition: "all 0.2s ease",
          mb: 1.5,
        }}
      >
        Proceed to Checkout
      </Button>

      <Button
        fullWidth
        variant="text"
        onClick={() => dispatch({ type: "CLEAR" })}
        sx={{
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.82rem",
          color: "rgba(0,0,0,0.38)",
          py: 1,
          "&:hover": {
            color: "#e53935",
            background: "rgba(229,57,53,0.06)",
          },
          transition: "all 0.2s ease",
        }}
      >
        Clear Cart
      </Button>
    </Box>
  );
};

export default OrderSummary;
