import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
// Components
import Card from "./Card";

// Context
import { CardContext } from "../contexts/CardContextProvider";

const ShopCard = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <Box component="div" className="shopCard-container">
      <Box component="div" className="checkout-container">
        {state.itemsCounter > 0 && (
          <Box component="div" className="total-container">
            <Box component="div">
              <Box component="div" display="flex">
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight={700}
                  display="flex"
                  alignItems="center"
                  mr={1}
                >
                  Total Items:
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={400}
                >
                  {state.itemsCounter}
                </Typography>
              </Box>

              <Box component="div" display="flex">
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight={700}
                  display="flex"
                  alignItems="center"
                  mr={1}
                >
                  Total Payments:
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={400}
                >
                  ${state.total}
                </Typography>
              </Box>
            </Box>

            <Box component="div" className="btn-container">
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch({ type: "CHECKOUT" })}
              >
                Check Out
              </Button>
              <Button
                variant="text"
                onClick={() => dispatch({ type: "CLEAR" })}
                color="error"
                sx={{ fontWeight: "bold" }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      {state.checkout &&
        (swal({
          text: "Checked Out Successfully!",
          icon: "success",
        }),
        (
          <Box component="div" className="checkout-card">
            <Typography variant="h3" color="primary" fontWeight={700}>
              Checked Out Successfully!
            </Typography>
            <Link to="/products">Back to shop</Link>
          </Box>
        ))}

      {!state.checkout && state.itemsCounter === 0 && (
        <Box component="div" className="empty-card">
          <Typography variant="h3" color="primary">
            Your card is empty!
          </Typography>
          <Link to="/products">Back to Shop</Link>
        </Box>
      )}
      <Box component="div">
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ShopCard;