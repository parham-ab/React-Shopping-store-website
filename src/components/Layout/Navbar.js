import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Toolbar,
  AppBar,
  Badge,
  IconButton,
  Container,
} from "@mui/material";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// context
import { CardContext } from "../../contexts/CardContextProvider";

const Navbar = () => {
  const { state } = useContext(CardContext);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#b7b7b7",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/products">
            <Typography variant="h6" component="div" color="text.secondary">
              Store
            </Typography>
          </Link>
          <Link to="/cards">
            <IconButton>
              <Badge badgeContent={state.itemsCounter} color="info">
                <ShoppingCartIcon color="action" sx={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;