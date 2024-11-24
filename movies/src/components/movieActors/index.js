import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const MovieActors = ({ actors }) => {
  return (
    <Grid container spacing={2}>
      {actors.map((actor) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={actor.id}>
          <Link to={`/actor/${actor.id}`} style={{ textDecoration: "none" }}>
            <div style={{ color: "black", textAlign: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  style={{ width: "100%", height: 500, borderRadius: "8px" }}
                />
              )}
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieActors;
