import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const ActorPage = (props) => {

    const {
        data: actorData,
        error, 
        isLoading,
        isError,
      } = useQuery("actors",  getActors)
    
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

  const actors = actorData?.results


  return (
    

    <PageTemplate
      title="Discover Actors"
      actors={actors}/>
  
);
};
export default ActorPage;