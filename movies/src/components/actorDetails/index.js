import Typography from "@mui/material/Typography";
import React from "react";

const ActorDetails = ({ actor }) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h4" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      </>
  );
};
export default ActorDetails ;
