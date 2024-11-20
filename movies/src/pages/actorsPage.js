import React, {useState} from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import FilterActorCard from "../components/filterActorsCard";


const ActorPage = (props) => {
  const [filter, setFilter] = useState("popular"); //filter set to popukar defaulf

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

  const actors = actorData?.results.filter((actor) => {
    if (filter === "popular") return true; 
    return actor.gender === parseInt(filter); //filter by value 1 and 2
  });


  return (
    <>

    <FilterActorCard filter={filter} setFilter={setFilter} />

    <PageTemplate
      title="Discover Actors"
      actors={actors}
    />
    </>
  
);
};
export default ActorPage;