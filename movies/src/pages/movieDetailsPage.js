import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getRecommendedMovies } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import MovieRecommendations from "../components/movieRecommendation";
import { Link } from "react-router-dom";


const MoviePage = (props) => {
  const { id } = useParams();
  console.log("MOVIE ID: " + id)
  
  const {
    data: movie,
    error,
    isLoading,
    isError,
} = useQuery(["movie", { id: id }], getMovie);

  // Query for recommended movies
  const { data: recommendationsData, movieError, movieIsLoading, movieIsError } = useQuery(
    ["recommendations", { id }],
    () => getRecommendedMovies(id),
    {
      enabled: !!id  // Ensures the query only runs if 'id' is defined
    }
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
            <div style={{ padding: "15px" }}>
                    {/* Button inside Link */}
              <Link to={`/movies/${id}/actors`}>
                  <button style={{ padding: '10px 20px', backgroundColor: '#1976D2', color: 'white', borderRadius: '10px' }}>
                    Actors in Movie
                  </button>
              </Link>
              <h2>Recommended Movies</h2>
              <MovieRecommendations movies={movieRecommendationsData} />
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
