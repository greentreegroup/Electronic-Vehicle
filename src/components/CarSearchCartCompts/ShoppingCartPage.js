import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Delete, Add, Remove } from "@mui/icons-material";
import { useCart } from "./CartContext";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BackButton from "./BackButton";
import { shippingRates } from "./data";
import CountrySelect from "./CountrySelect";
import { formatCurrency } from "./functions";
import ModalEmptyCart from "./ModalEmptyCart";
import EmptyCartButton from "./EmptyCartButton";
import { COLOUR } from "./Colour";

const Cart = () => {
  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [estimatedTax, setEstimatedTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const totalCars = cart.length;

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  const handleBack = () => {
    navigate("/CarSearch");
  };

  const handleEmptyCart = () => {
    if (cart.length > 0) {
      setModalOpen(true);
    }
  };

  const calculateTotal = (updatedCart) => {
    const subtotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setSubtotal(subtotal);
    const newTotalQuantity = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0,
    );
    setTotalQuantity(newTotalQuantity);
    const shippingCost =
      calculateShippingCost(selectedCountry) * newTotalQuantity;
    setShippingCost(shippingCost);
    const tax = subtotal * 0.1;
    setEstimatedTax(tax); // Assume 10% tax
    setTotalPrice(subtotal + shippingCost + tax);
  };

  const calculateShippingCost = (country) => {
    const rate = shippingRates[country] || shippingRates.default;
    return rate.baseRate * rate.weightMultiplier;
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    const newShippingCost = calculateShippingCost(country);
    setShippingCost(newShippingCost);
    const updatedTotalPrice = subtotal + newShippingCost + estimatedTax;
    setTotalPrice(updatedTotalPrice);
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item,
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <ModalEmptyCart
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        calculateTotal={calculateTotal}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ marginTop: "5px"}} //Adds spacing at the top of the page to prevent clipping
      >
        <Grid item>
          <BackButton handleBack={handleBack} />
        </Grid>

        <Grid item>
          <Grid container alignItems="center">
            {/* Stacked sub-caption (Cars and Qty) */}
            <Grid item>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmptyCartButton handleEmptyCart={handleEmptyCart} />
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body1">Types of Cars:</Typography>
                    <Chip label={totalCars} variant="outlined" />
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body1">Total Qty:</Typography>
                    <Chip label={totalQuantity} variant="outlined" />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            {/* Title (Shopping Cart) */}
            <Grid item sx={{ ml: 2 }}>
              <Typography variant="h2">Shopping Cart</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {cart.length > 0 ? (
        <Grid container spacing={2}>
          {cart.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        width="100%"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x300";
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">
                        Price: {formatCurrency(item.price)}
                      </Typography>
                      <Typography variant="body1">
                        Quantity: {item.quantity}
                      </Typography>
                      <div>
                        <IconButton onClick={() => updateQuantity(item.id, 1)}>
                          <Add />
                        </IconButton>
                        <IconButton onClick={() => updateQuantity(item.id, -1)}>
                          <Remove />
                        </IconButton>
                        <IconButton onClick={() => removeItem(item.id)}>
                          <Delete />
                        </IconButton>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid container sx={{ padding: 2 }}>
            <Grid item xs={6} spacing={2}>
              <Stack spacing={2}>
                <CountrySelect
                  selectedCountry={selectedCountry}
                  handleCountryChange={handleCountryChange}
                />
                <Typography variant="h6">
                  Sub Total: {formatCurrency(subtotal)}
                </Typography>
                <Typography variant="body1">
                  Shipping Rate: {formatCurrency(shippingCost)}
                </Typography>
                <Typography variant="body1">
                  Estimated Tax: {formatCurrency(estimatedTax)}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h5">Final Total:</Typography>
                  <Chip
                    label={formatCurrency(totalPrice)}
                    variant="outlined"
                    sx={{
                      backgroundColor: COLOUR,
                      color: "white",
                      fontWeight: "bold",
                      padding: "12px 24px",
                      boxShadow: 2,
                      fontSize: "1.25rem",
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6">Your cart is empty.</Typography>
      )}
    </>
  );
};

export default Cart;
