import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";



function ActorListPageTemplate({ actors, title, action, children }) {
 
  let displayedActors = actors

  return (
    <div>
    <Header title={title} />

    <div>{children}</div>
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