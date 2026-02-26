import { Box } from "@mui/material";
import loader from "../../assets/loading.svg";

const Loading = () => {
  return (
    <Box
      sx={{ minHeight: "80vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img width={50} src={loader} alt="loading" />
    </Box>
  );
};

export default Loading;
