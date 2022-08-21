import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// context
import { CardContext } from "../../contexts/CardContextProvider";
import { Typography, Toolbar, AppBar, Badge, IconButton } from "@mui/material";

const Navbar = () => {
  const { state } = useContext(CardContext);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#b7b7b7",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "rgb(131 131 131 / 20%) 0px 20px 25px",
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
    </AppBar>
  );
};

export default Navbar;