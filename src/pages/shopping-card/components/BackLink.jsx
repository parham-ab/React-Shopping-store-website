import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackLink = ({ label }) => (
  <Link to="/products" style={{ textDecoration: "none" }}>
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        mt: 2,
        color: "#6C63FF",
        fontSize: "0.85rem",
        fontWeight: 600,
        transition: "gap 0.2s ease",
        "&:hover": { gap: 1.25 },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: 16 }} />
      {label}
    </Box>
  </Link>
);
export default BackLink;
