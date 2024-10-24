import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { SELECT_COLOUR2, COLOUR } from "./Colour";

const FormSortBy = ({ brand, handleSortBrand, carBrands }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Select
        id="sort-brand"
        value={brand}
        onChange={handleSortBrand}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                "&.Mui-selected": {
                  backgroundColor: SELECT_COLOUR2,
                  "&:hover": {
                    backgroundColor: SELECT_COLOUR2,
                  },
                },
                "&:hover": {
                  backgroundColor: SELECT_COLOUR2,
                },
              },
            },
          },
        }}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
        }}
      >
        {/* Option to show all brands */}
        <MenuItem value="">All Brands</MenuItem>{" "}
        {carBrands.map((carBrand, index) => (
          <MenuItem key={index} value={carBrand}>
            {carBrand}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FormSortOrder = ({ sortOrder, handleSortOrderChange }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Select
        id="sort-order"
        value={sortOrder}
        onChange={handleSortOrderChange}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                "&.Mui-selected": {
                  backgroundColor: SELECT_COLOUR2,
                  "&:hover": {
                    backgroundColor: SELECT_COLOUR2,
                  },
                },
                "&:hover": {
                  backgroundColor: SELECT_COLOUR2,
                },
              },
            },
          },
        }}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
        }}
      >
        <MenuItem value="price-asc">Price: Low to High</MenuItem>
        <MenuItem value="price-desc">Price: High to Low</MenuItem>
        <MenuItem value="year-asc">Year: Old to New</MenuItem>
        <MenuItem value="year-desc">Year: New to Old</MenuItem>
      </Select>
    </FormControl>
  );
};

const FormModelType = ({ model, modelTypes, handleSortModels }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Select
        id="sort-model"
        value={model}
        onChange={handleSortModels}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                "&.Mui-selected": {
                  backgroundColor: SELECT_COLOUR2,
                  "&:hover": {
                    backgroundColor: SELECT_COLOUR2,
                  },
                },
                "&:hover": {
                  backgroundColor: SELECT_COLOUR2,
                },
              },
            },
          },
        }}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
        }}
      >
        {/* Option to show all brands */}
        <MenuItem value="">All Models</MenuItem>{" "}
        {modelTypes.map((model, index) => (
          <MenuItem key={index} value={model}>
            {model}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FormFuelType = ({ fuelType, fuelTypes, handleSortFuelTypes }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Select
        id="sort-fuel"
        value={fuelType}
        onChange={handleSortFuelTypes}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                "&.Mui-selected": {
                  backgroundColor: SELECT_COLOUR2,
                  "&:hover": {
                    backgroundColor: SELECT_COLOUR2,
                  },
                },
                "&:hover": {
                  backgroundColor: SELECT_COLOUR2,
                },
              },
            },
          },
        }}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
        }}
      >
        {/* Option to show all fuel types */}
        <MenuItem value="">All Fuel Types</MenuItem>{" "}
        {fuelTypes.map((fuelType, index) => (
          <MenuItem key={index} value={fuelType}>
            {fuelType}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { FormSortBy, FormSortOrder, FormModelType, FormFuelType };
