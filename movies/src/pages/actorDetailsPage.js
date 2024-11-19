import React from 'react';
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import ActorMovies from '../components/actorMovies';
import { getActorMovies } from '../api/tmdb-api';


const ActorDetailPage = (props) => {
  const { id } = useParams();
  console.log("ACTOR ID: " + id)
  
  const {
    data: actor,
    error,
    isLoading,
    isError,
} = useQuery(["actor", { id: id }], getActor);


const {
  data: actedIn,
  movieError,
  movieIsLoading,
  movieIsError,
} = useQuery(["actorMovies", { id }], 
  () => getActorMovies(id),
  {
    enabled: !!id  // Ensures the query only runs if 'id' is defined
  }
)

if (isLoading || movieIsLoading) {
  return <Spinner />;
}

if (isError || movieIsError) {
  return <h1>{error?.message || movieError?.message}</h1>;
}


// const actorMovies = actedIn?.results || [];

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />

            {/* <h2>Actor Movies</h2>
              <ActorMovies actors={actorMovies} /> */}
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );

};

export default ActorDetailPage;
