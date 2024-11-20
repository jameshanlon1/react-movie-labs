import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const FilterActorCard = ({filter, setFilter}) => {  

  return(
<>
      {/* Gender Filter Dropdown */}
      <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="filter-select-label">Filter</InputLabel>
        <Select
          labelId="filter-select-label"
          id="gender-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="popular">Poular</MenuItem>
          <MenuItem value="1">Female</MenuItem>
          <MenuItem value="2">Male</MenuItem>
        </Select>
      </FormControl>
      </>
  );
};
export default FilterActorCard;
