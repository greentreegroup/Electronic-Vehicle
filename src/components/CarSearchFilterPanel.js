import React from "react";
import { SelectChangeEvent, Slider, Typography, Grid } from "@mui/material";
import { FormSortOrder, FormSortBy } from "./CarSearchForms";

const FilterPanel = ({
  brand,
  sortOrder,
  priceRange,
  yearRange,
  carBrands,
  handleSortOrderChange,
  handleSortBrand,
  handlePriceChange,
  handleYearChange,
}) => {
  return (
    <Grid item xs={6} sm={4} md={3} sx={{ paddingRight: "2px" }}>
      <Typography gutterBottom>Brand</Typography>
      <FormSortBy
        brand={brand}
        carBrands={carBrands}
        handleSortBrand={handleSortBrand}
      />
      <Typography gutterBottom>Order</Typography>
      <FormSortOrder
        sortOrder={sortOrder}
        handleSortOrderChange={handleSortOrderChange}
      />

      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        sx={{
          marginBottom: 2,
          marginLeft: "6px",
          color: "#f57b18", // Set the color of the slider
          "& .MuiSlider-thumb": {
            backgroundColor: "#f57b18", // Thumb (the circle) color
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 8px rgba(245, 123, 24, 0.16)", // Orange glow on hover
              backgroundColor: "#f57b18", // Maintain the orange color on hover
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: "#f57b18", // Track (filled portion) color
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd", // Rail (unfilled portion) color
          },
        }}
      />

      <Typography gutterBottom>Year Range</Typography>
      <Slider
        value={yearRange}
        onChange={handleYearChange}
        valueLabelDisplay="auto"
        min={2000}
        max={2024}
        sx={{
          marginLeft: "6px",
          color: "#f57b18", // Set the color of the slider
          "& .MuiSlider-thumb": {
            backgroundColor: "#f57b18",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 8px rgba(245, 123, 24, 0.16)",
              backgroundColor: "#f57b18",
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: "#f57b18",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd",
          },
        }}
      />
    </Grid>
  );
};

export default FilterPanel;
