import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AZURE_BLOB_SAS_URL } from "./CarSearchUrls";

const CarCard = ({ result }) => {
  const navigate = useNavigate();
  const [firstImage] = result.image.split(",");

  const handleClick = () => {
    navigate(`/car-details/${result.id}`, { state: { car: result } });
  };

  const handleImageError = (e) => {
    e.currentTarget.src = "https://placehold.co/400x300"; // Fallback image URL
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effects
        "&:hover": {
          backgroundColor: "#ecf0f1",
          transform: "scale(1.05)", // Slight magnification effect
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Box shadow around edges
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 400,
          height: 300,
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={AZURE_BLOB_SAS_URL(firstImage)}
        onError={handleImageError}
        alt={result.brand}
      />
      <CardContent>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            fontSize: "clamp(16px, 2.5vw, 24px)", // Dynamically scale font size between 16px and 24px
            overflow: "hidden", // Hide overflow text
            textOverflow: "ellipsis", // Show ellipsis if text overflows
            whiteSpace: "nowrap", // Prevent text from wrapping to a new line
          }}
        >
          {result.brand} {result.model}
        </Typography>
        <Typography variant="body2">{`Year: ${result.year}`}</Typography>
        <Typography variant="h4" color="text.primary">
          {`$${result.price.toFixed(2)}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CarCard, Typography };
