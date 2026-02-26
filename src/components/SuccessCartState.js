import { Box, Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BackLink from "./BackLink";

const SuccessCartState = () => {
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
};

export default SuccessCartState;
