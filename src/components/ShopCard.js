import { useContext } from "react";
import swal from "sweetalert";
import { Box, Container } from "@mui/material";
import { CardContext } from "../contexts/CardContextProvider";
import OrderSummary from "./OrderSummary";
import EmptyCartState from "./EmptyCartState";
import SuccessCartState from "./SuccessCartState";
import CartList from "./CartList";

const ShopCard = () => {
  const { state } = useContext(CardContext);
  if (state.checkout) {
    swal({ text: "Checked Out Successfully!", icon: "success" });
    return <SuccessCartState />;
  }
  if (!state.checkout && state.itemsCounter === 0) {
    return <EmptyCartState />;
  }

  return (
    <Container>
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          mb: 8,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 320px" },
          gap: { xs: 4, md: 5 },
          alignItems: "start",
        }}
      >
        {/* cart items */}
        <CartList />
        {/* order summary */}
        <OrderSummary />
      </Box>
    </Container>
  );
};

export default ShopCard;
