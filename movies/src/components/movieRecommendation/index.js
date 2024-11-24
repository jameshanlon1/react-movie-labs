import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom"
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import CardActions from "@mui/material/CardActions";

function MovieRecommendations({ movies }) {
  return (
    <Grid container spacing={2} padding={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id} size={{xs: 24, sm: 12, md: 8, lg: 6, xl: 4}} sx={{padding: "20px"}}>
          <Card>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
      <CardActions disableSpacing>

      <Link to={`/movies/${movie.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
      </Link>

      </CardActions>
    </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieRecommendations;
