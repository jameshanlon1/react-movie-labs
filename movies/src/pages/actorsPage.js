import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const ActorPage = (props) => {

    const {
        data: castData,
        error: castError,
        isLoading: isCastLoading,
        isError: isCastError,
      } = useQuery("movieCast",  getActors);
    
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

  const actors = castData?.results;


  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
    />
);
};
export default ActorPage;