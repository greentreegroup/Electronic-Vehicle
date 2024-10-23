import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "./functions";
import { BACKGROUND_COLOUR } from "./Colour";

const CarCard = ({ result }) => {
  const navigate = useNavigate();
  const [firstImage] = result.image.split(", ");

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
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        maxWidth: "100%",
        "&:hover": {
          backgroundColor: "#ecf0f1",
          transform: "scale(1.05)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "12rem",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={firstImage}
        onError={handleImageError}
        alt={`${result.brand} ${result.model}`}
      />
      <CardContent>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {result.brand} {result.model}
        </Typography>
        <Typography variant="body2">{`Year: ${result.year}`}</Typography>
        <Typography variant="body2">{`Model: ${result.model_type}`}</Typography>
        <Typography variant="h4" color={BACKGROUND_COLOUR}>
          {formatCurrency(result.price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarCard;
