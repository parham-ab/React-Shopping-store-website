import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Typography,
  Toolbar,
  AppBar,
  Badge,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CardContext } from "../../contexts/CardContextProvider";

const Header = () => {
  const { state } = useContext(CardContext);
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                transition: "opacity 0.2s ease",
                "&:hover": { opacity: 0.8 },
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, #6C63FF 0%, #3ECFCF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(108, 99, 255, 0.45)",
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#fff",
                  }}
                >
                  Store
                </Typography>
              </Box>
            </Box>
          </Link>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link to="/cards" style={{ textDecoration: "none" }}>
              <IconButton
                disableRipple
                sx={{
                  position: "relative",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor:
                    location.pathname === "/cards"
                      ? "rgba(108, 99, 255, 0.6)"
                      : "rgba(255,255,255,0.1)",
                  background:
                    location.pathname === "/cards"
                      ? "rgba(108, 99, 255, 0.12)"
                      : "rgba(255,255,255,0.04)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "rgba(108, 99, 255, 0.5)",
                    background: "rgba(108, 99, 255, 0.1)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 16px rgba(108, 99, 255, 0.2)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                <Badge
                  badgeContent={state.itemsCounter}
                  sx={{
                    "& .MuiBadge-badge": {
                      background: "linear-gradient(135deg, #6C63FF, #3ECFCF)",
                      color: "#fff",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      minWidth: 18,
                      height: 18,
                      padding: "0 4px",
                      top: 2,
                      right: 2,
                      boxShadow: "0 0 8px rgba(108,99,255,0.6)",
                    },
                  }}
                >
                  <ShoppingCartIcon
                    sx={{
                      fontSize: "20px",
                      color:
                        location.pathname === "/cards"
                          ? "#a09bf8"
                          : "rgba(255,255,255,0.7)",
                      transition: "color 0.2s ease",
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
