import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Snackbar, Button, TextField } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Alert from "@mui/material/Alert";
import { useCart } from "./CartContext";
import ContactSeller from "./Contact";
import { contactData } from "./data";
import { COLOUR } from "./Colour";
import Specifications from "./Specifications";
import './CarDetails.css'; 

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!))/g, ",");
};

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(car.image.split(",")[0]);
  const imageArray = car.image.split(",");

  const handleBack = () => {
    navigate("/CarSearch");
  };

  const addToCart = () => {
    const existingCar = cart.find((item) => item.id === car.id);
    let updatedCart;

    if (existingCar) {
      updatedCart = cart.map((item) =>
        item.id === car.id
          ? { ...item, quantity: existingCar.quantity + quantity }
          : item
      );
    } else {
      const newCartItem = {
        id: car.id,
        name: `${car.brand} ${car.model}`,
        price: car.price,
        image: selectedImage,
        quantity,
      };
      updatedCart = [...cart, newCartItem];
    }

    setOpen(true);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Box className="car-detail-container">
      <Box className="car-section">
        <Box className="image-container">
          <img
            src={selectedImage}
            alt={`${car.brand} ${car.model}`}
            className="image"
          />
          <Box className="thumbnails">
            {imageArray.map((img, index) => (
              <Box
                key={index}
                className="thumbnail"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="details-container">
          <Typography variant="h4" className="title">
            {car.brand} {car.model}
          </Typography>
          <Typography variant="body1">
            Model Type: {car.model_type}, Top Speed: {car.top_speed} km/h
          </Typography>
          <Typography variant="h3" className="price">
            ${formatPrice(car.price)}
          </Typography>
          <Typography variant="body1">
            Availability: Available
          </Typography>

          <Box className="quantity-selector">
            <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} variant="outlined">-</Button>
            <TextField
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              inputProps={{ min: 1, style: { textAlign: 'center' } }}
              variant="outlined"
              size="small"
              sx={{ width: 50, mx: 1 }}
            />
            <Button onClick={() => setQuantity(quantity + 1)} variant="outlined">+</Button>
          </Box>

          <Button
            onClick={addToCart}
            variant="outlined"
            style={{
              borderColor: COLOUR,
              color: COLOUR,
              width: '100%',
              marginTop: 16,
              fontFamily: "Arial, sans-serif",
            }}
          >
            <AddShoppingCart /> Add to Cart
          </Button>

          <Box className="contact-message">
            <Typography variant="body1">
              Any questions? Contact us via e-mail at <a href="mailto:support@evrabbit.com">support@evrabbit.com</a>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{ margin: 4, mx: 'auto' }}>
        <Box className="overview-section">
          <Typography variant="h6" className="section-title" sx={{fontWeight:700}}>
            Car Overview
          </Typography>
          <Box display="flex" flexDirection="column" spacing={2}>
            {Object.entries({
              Brand: car.brand,
              "Usable Battery (kWh)": car.usable_battery,
              "Real Range (km)": car.real_range,
              "Efficiency (Wh/km)": car.efficiency,
              "Acceleration (sec)": car.acceleration,
              "Top Speed (km/h)": car.top_speed,
              Year: car.year,
              "Model Type": car.model_type,
            }).map(([label, value]) => (
              <Box key={label} display="flex" justifyContent="space-between" padding="4px" borderBottom="1px solid #ccc">
                <Typography><strong>{label}</strong></Typography>
                <Typography>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="features-section">
          <Typography variant="h6" className="section-title" sx={{fontWeight:700}}>
            Features
          </Typography>
          <Box display="flex" flexDirection="column" spacing={2} textAlign="left">
            {car.features && car.features.split(",").map((feature, index) => (
              <Typography key={index} sx={{ padding: "4px", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                🔵 {feature.trim()}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Specifications car={car} />

      <Box className="features-section">
        <Typography variant="h6" className="section-title" sx={{fontWeight:700}}>
          Model List
        </Typography>
        <Box display="flex" flexDirection="column" spacing={2} textAlign="left">
          {car.modelList && car.modelList.split(",").map((list_model, index) => (
            <Typography key={index} sx={{ padding: "4px", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
               {list_model.trim()}
             </Typography>
          ))}
        </Box>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="outlined" icon={<CheckCircleOutlineIcon sx={{ color: COLOUR }} />} sx={{ color: COLOUR, borderColor: COLOUR }}>
          {`${car.brand} ${car.model} added to cart`}
        </Alert>
      </Snackbar>

      <ContactSeller contacts={contactData} />
    </Box>
  );
};

export default CarDetails;
