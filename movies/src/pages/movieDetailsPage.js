import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getRecommendedMovies } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import MovieRecommendations from "../components/movieRecommendation";


const MoviePage = (props) => {
  const { id } = useParams();
  console.log("MOVIE ID: " + id)
  
  const {
    data: movie,
    error,
    isLoading,
    isError,
} = useQuery(["movie", { id: id }], getMovie);

  const { data: recommendationsData, movieError, movieIsLoading, movieIsError } = useQuery(
    ["recommendations", { id }],
    () => getRecommendedMovies(id)
  );

  if (isLoading || movieIsLoading) {
    return <Spinner />;
  }

  if (isError || movieIsError) {
    return <h1>{error?.message || movieError?.message}</h1>;
  }

  const movieRecommendationsData = recommendationsData?.results || [];  // Fallback to an empty array if undefined

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
              <h2>Recommended Movies</h2>
              <MovieRecommendations movies={movieRecommendationsData} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
