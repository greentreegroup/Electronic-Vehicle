import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { countries } from "./data";
import { COLOUR } from "./Colour";

const CountrySelect = ({
  handleCountryChange,
}) => {
  return (
    <FormControl sx={{ maxWidth: "fit-content" }}>
      <InputLabel
        sx={{
          color: COLOUR,
          "&.Mui-focused": {
            color: COLOUR,
          },
          paddingLeft: "4px",
          paddingRight: "4px",
          backgroundColor: "white",
        }}
        id="select-country-autowidth"
      >
        Ship to Country
      </InputLabel>
      <Select
        defaultValue={countries["US"]}
        label="country"
        autoWidth
        id="select-country-autowidth"
        variant="outlined"
        onChange={handleCountryChange}
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOUR,
          },
        }}
      >
        {Object.entries(countries).map(([code, name]) => (
          <MenuItem key={code} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
