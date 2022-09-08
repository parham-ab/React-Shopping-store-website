import { Box } from "@mui/material";
// loading img
import loader from "../assets/img/loader.gif";

const Loading = () => {
  return (
    <Box
      sx={{ minHeight: "80vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={loader} alt="loading" />
    </Box>
  );
};

export default Loading;