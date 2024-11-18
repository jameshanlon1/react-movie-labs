import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner"; 
import {getActors } from "../api/tmdb-api"; 
import PageTemplate from '../components/templateActorListPage';


const MovieActorsPage = () => {
  const { id } = useParams();



  const {
    data: castData,
    error: castError,
    isLoading: isCastLoading,
    isError: isCastError,
  } = useQuery(["movieCast", { id }], () => getActors(id));

  // Handle loading and error states for both queries
  if ( isCastLoading) {
    return <Spinner />;
  }

  if (castError) {
    return <h1>{castError.message}</h1>;
  }

  if (isCastError) {
    return <h1>{castError.message}</h1>;
  }

  // Safely access the cast array (defaults to an empty array if missing)
  const actors = castData?.cast || [];

  return (
    <PageTemplate
    title="Discover Actors"
    actors={actors}
  />
  );
};

export default MovieActorsPage;

