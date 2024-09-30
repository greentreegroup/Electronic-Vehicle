import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AZURE_BLOB_SAS_URL } from "./urls";
import { formatCurrency } from "./functions"

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
        transition: "transform 0.3s ease, box-shadow 0.3s ease", 
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
            fontSize: "clamp(16px, 2.5vw, 24px)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {result.brand} {result.model}
        </Typography>
        <Typography variant="body2">{`Year: ${result.year}`}</Typography>
        <Typography variant="h4" color="text.primary">
          {formatCurrency(result.price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CarCard, Typography };
