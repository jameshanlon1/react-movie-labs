import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner"; 
import {getMovieActors } from "../api/tmdb-api"; 
import PageTemplate from '../components/templateActorListPage';


const MovieActorsPage = () => {
  const { id } = useParams();

  const {
    data: aData,
    error, 
    isLoading,
    isError,
  } = useQuery(["movieCast", { id: id }], getMovieActors);

  if ( isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // access the array of actors
  const actors = aData?.cast || [];

  return (
    <PageTemplate
    title="Movie Actors"
    actors={actors}
  />
  );
};

export default MovieActorsPage;

