import { Box, Typography } from "@mui/material";

const StatRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{
        fontSize: "0.82rem",
        color: "rgba(0,0,0,0.45)",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {label}
    </Typography>
    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e" }}>
      {value}
    </Typography>
  </Box>
);
export default StatRow;
