import React from "react";
import { Slider, Typography, Grid } from "@mui/material";
import { FormSortOrder, FormSortBy, FormModelType, FormFuelType } from "./Forms";
import { COLOUR } from "./Colour"

const FilterPanel = ({
  brand,
  model,
  fuelType,
  sortOrder,
  priceRange,
  yearRange,
  carBrands,
  modelTypes,
  fuelTypes,
  handleSortModels,
  handleSortFuelTypes,
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

      <Typography gutterBottom>Model</Typography>
      <FormModelType
        model={model}
        modelTypes={modelTypes}
        handleSortModels={handleSortModels}
      />

      <Typography gutterBottom>Fuel Type</Typography>
      <FormFuelType
        fuelType={fuelType}
        fuelTypes={fuelTypes}
        handleSortFuelTypes={handleSortFuelTypes}
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
          color: COLOUR,
          "& .MuiSlider-thumb": {
            backgroundColor: COLOUR,
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 8px rgba(245, 123, 24, 0.16)", // Orange glow on hover
              backgroundColor: COLOUR,
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: COLOUR,
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd",
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
          color: COLOUR,
          "& .MuiSlider-thumb": {
            backgroundColor: COLOUR,
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 8px rgba(245, 123, 24, 0.16)",
              backgroundColor: COLOUR,
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: COLOUR,
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
