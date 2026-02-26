import { Box, Typography } from "@mui/material";

const ProductInfo = ({ label, children }) => (
  <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start",flexWrap:'wrap' }}>
    <Typography
      sx={{
        fontSize: "0.75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        color: "rgba(0,0,0,0.35)",
        pt: "2px",
        flexShrink: 0,
        minWidth: 72,
      }}
    >
      {label}
    </Typography>
    {children}
  </Box>
);
export default ProductInfo;
