import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import SearchMoviesCard from "../searchMovies";

function MovieSearchPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
      };
    

  return (
<div>
  <Header title={title} />

  <SearchMoviesCard 
  onUserInput={handleChange} 
  titleFilter={nameFilter} />

    <Grid container>
      <Grid size={12}>
      </Grid>
    
      <Grid container sx={{flex: "1 1 500px"}}>
      <MovieList action={action} movies={displayedMovies} />
    </Grid>
  </Grid>
</div>

  );
}
export default MovieSearchPageTemplate;