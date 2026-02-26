import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CardContext } from "../contexts/CardContextProvider";
import Card from "./Card";

const CartList = () => {
  const { state } = useContext(CardContext);

  return (
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
        {state.selectedItems?.map((item) => (
          <Card key={item?.id} data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default CartList;
