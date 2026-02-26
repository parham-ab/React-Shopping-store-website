import { Box, Container, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BackLink from "./BackLink";

const EmptyCartState = () => {
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
};

export default EmptyCartState;
