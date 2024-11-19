import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'


export default function ActorCard({actor}) {
 

  return (
    <Card>
            <Link to={`/movies/actors/${actor.id}`} style={{textDecoration: "none"}}>

        {/* title={
          <Typography variant="h5" component="p">
            {actor.title}{" "}
          </Typography>
        } */}
      
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container alignItems="center">
          <Grid size={{md: 20}}>
            <Typography variant="h6" component="p" sx={{fontWeight: 'bold', textAlign: 'center', color: "black"}}>
              {actor.name}
            </Typography>
          </Grid>
          <Grid size={{md: 20}}>
            <Typography variant="body1" component="p" sx={{fontStyle: 'italic', textAlign: 'center', color: "black"}}>
               {actor.character}
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>


      <CardActions disableSpacing>

      </CardActions>
      </Link>
    </Card>
  );
}