import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, AddShoppingCart } from "@mui/icons-material";
import ContactSeller from "./Contact";
import { contactData } from "./data";
import { AZURE_BLOB_SAS_URL } from "./urls";
import { useCart } from "./CartContext";
import BackButton from "./BackButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { COLOUR } from "./Colour";

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useCart();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);

  const handleBack = () => {
    navigate("/CarSearch");
  };

  useEffect(() => {
    const images = car.image.split(",");
    setImageArray(images);
  }, [car.image]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car.image.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === car.image.length - 1 ? 0 : prev + 1,
    );
  };

  const handleClose = ( event?, reason?) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addToCart = (id, delta) => {
    const existingCar = cart.find((item) => item.id === id);
    let updatedCart;

    if (existingCar) {
      updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, existingCar.quantity + delta) }
          : item,
      );
    } else {
      const { id, brand, model, price, image } = car;
      const newCartItem: CartItem = {
        id: id,
        name: `${brand} ${model}`,
        price: price,
        image: image,
        quantity: 1,
      };
      updatedCart = [...cart, newCartItem];
    }
    setOpen(true);
    //console.log(`${car.brand} ${car.model} added`);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box
      sx={{
        overflow: "auto",
        textAlign: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <BackButton handleBack={handleBack} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={8} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              width: "600px",
              height: "400px",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
              }}
              disabled={currentImageIndex === 0}
            >
              <ArrowBack />
            </IconButton>
            {imageArray.length > 0 && (
              <img
                src={AZURE_BLOB_SAS_URL(imageArray[currentImageIndex])}
                alt={`${currentImageIndex + 1} of ${car.brand} ${car.model}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x300";
                }}
              />
            )}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
              }}
              disabled={currentImageIndex === imageArray.length - 1}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Grid>

        {/* Price Box */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
              padding: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 2,
                borderRadius: "8px",
                boxShadow: 3,
                textAlign: "center",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                {car.brand} {car.model}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#555",
                }}
              >
                ${car.price}
              </Typography>
              <Button
                onClick={() => addToCart(car.id, 1)}
                variant="outlined"
                sx={{
                  borderColor: COLOUR,
                  color: COLOUR,
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  "&:hover": {
                    borderColor: COLOUR,
                    backgroundColor: `${COLOUR}25`,
                    color: COLOUR,
                  },
                }}
              >
                <AddShoppingCart sx={{ fontSize: 100 }} />
                <Typography
                  fontSize="large"
                  variant="caption"
                  sx={{ marginTop: 1, padding: 2 }}
                >
                  Add to Cart
                </Typography>
              </Button>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  {`${car.brand} ${car.model} added`}
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Display comprehensive car data */}
      <Grid
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "75px",
        }}
        container
        spacing={2}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, justifyContent: "center", marginTop: 3 }}
        >
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {Object.entries({
                Year: car.year,
                "Usable Battery (kWh)": car.usable_battery,
                "Real Range (km)": car.real_range,
                "Efficiency (Wh/km)": car.efficiency,
                "Acceleration (sec)": car.acceleration,
                "Top Speed (km/h)": car.top_speed,
              }).map(([label, value]) => (
                <React.Fragment key={label}>
                  <Grid
                    item
                    xs={6}
                    sx={{ padding: "4px", borderBottom: "1px solid #ccc" }}
                  >
                    <Typography>
                      <strong>{label}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className="cell">
                    <Typography>{value}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Seller Component */}
      <ContactSeller contacts={contactData} />
    </Box>
  );
};

export default CarDetails;
