import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddPlaylistIcon from "../components/cardIcons/playlistAdd";

const Upcoming = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlists = movies.filter(m => m.playlist)
  localStorage.setItem('playlists', JSON.stringify(playlists))
  const addToPlaylists = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddPlaylistIcon movie={movie} />
      }}
    />
);
};
export default Upcoming;