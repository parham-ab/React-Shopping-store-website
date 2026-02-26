import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const ProductDetailsSkeleton = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 6,
      mt: { xs: 4, md: 8 },
    }}
  >
    <Skeleton variant="rounded" height={420} sx={{ borderRadius: "20px" }} />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {[80, 40, 60, 40, 40, 40, 56]?.map((w, i) => (
        <Skeleton key={i} variant="text" width={`${w}%`} height={24} />
      ))}
    </Box>
  </Box>
);
export default ProductDetailsSkeleton;
