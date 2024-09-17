import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import ContactSeller from "./CarSearchContact";
import { AZURE_BLOB_SAS_URL } from "./CarSearchUrls";

// placeholder
const contactData = {
  title: "Location Name",
  address: "128A/19 Street Name",
  phone: "311 202 7323",
  email: "contact@carseller.com",
};

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

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

  return (
    <Box
      sx={{
        overflow: "auto",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleBack}
          sx={{
            textTransform: "none", // Disable uppercase text
            paddingX: 4,
            paddingY: 1.5,
            marginTop: 2,
            marginBottom: 3,
            borderColor: "#17292e", // Border color for the outlined variant
            color: "#17292e", // Text color
            "&:hover": {
              borderColor: "#17292e", // Border color on hover
              backgroundColor: "#ecf0f1", // Background color on hover
            },
          }}
          variant="outlined"
        >
          Back to Cars
        </Button>
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
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight background for visibility
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
                  <Grid item xs={6} className="cell">
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
