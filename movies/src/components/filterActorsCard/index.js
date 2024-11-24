import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const FilterActorCard = ({filter, setFilter}) => {  


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return(
<>
      {/* filter dropdown */}
      <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="filter-select-label">Most Popular</InputLabel>
        <Select
          labelId="filter-select-label"
          id="gender-select"
          defaultValue="all"
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="1">Female</MenuItem>
          <MenuItem value="2">Male</MenuItem>
        </Select>
      </FormControl>
      </>
  );
};
export default FilterActorCard;
