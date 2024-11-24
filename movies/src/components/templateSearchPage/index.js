import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import SearchMoviesCard from "../searchMovies";
import { searchMovies } from "../../api/tmdb-api";

function MovieSearchPageTemplate({ title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [displayedMovies, setDisplayedMovies] = useState([]);

  // let displayedMovies = nameFilter.trim()
  //  ? movies.filter((m) => 
  //       m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1
  //   )
  //   : [];

  //   const handleChange = (type, value) => {
  //       if (type === "name") setNameFilter(value);
  //     };

  const handleChange = async (type, value) => {
    if (type === "name") {
      setNameFilter(value);
        if (value.trim()) {
            const data = await searchMovies(value); // gets from api
            setDisplayedMovies(data.results || []); // results from api get displayed

        } else {
          setDisplayedMovies([]); // when empty, clear 
        }
      }
    
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