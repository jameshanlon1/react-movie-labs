import React from "react";
import { searchMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateSearchPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const SearchPage = (props) => {

    const {
        data: searchData,
        error, 
        isLoading,
        isError,
      } = useQuery("search",  searchMovies)
    
      // Handle loading and error states for both queries
      if ( isLoading) {
        return <Spinner />;
      }
    
      if (error) {
        return <h1>{error.message}</h1>;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }

  const movies = searchData?.results

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    

    <PageTemplate
      title="Search Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}/>
  
);
};
export default SearchPage;