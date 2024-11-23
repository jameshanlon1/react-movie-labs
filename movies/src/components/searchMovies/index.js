import react from "react-query";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";


const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function SearchMoviesCard(props) {


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };


  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />
      </Grid>
      </Grid>

  );
}