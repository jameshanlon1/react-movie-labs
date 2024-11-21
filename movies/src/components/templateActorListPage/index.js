import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";
import FilterActorCard from "../filterActorsCard";



function ActorListPageTemplate({ actors, title, action, children }) {
  const [filter, setFilter] = useState("all"); //filter set to popukar defaulf


  let displayedActors = actors
  .filter((actor) => {
    if (filter === "all") return true; 
    return actor.gender === parseInt(filter); //filter by value 1 and 2
  });


  return (
    <div>
    <Header title={title} />
    <FilterActorCard
            setFilter={setFilter}
          />
    <Grid container>
      <Grid size={12}>
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  </div>
  );
}
export default ActorListPageTemplate;