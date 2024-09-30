import React from "react";
import { Badge, IconButton, BadgeProps } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { styled } from "@mui/material/styles";
import { COLOUR } from "./Colour";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: COLOUR,
    color: theme.palette.getContrastText(COLOUR),
  },
}));

const ShoppingCartHeader = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <IconButton onClick={() => navigate("/cart")} color="inherit">
      <StyledBadge badgeContent={totalQuantity}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShoppingCartHeader;
