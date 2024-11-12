import React from "react";

function MovieRecommendations({ movies }) {
  return (
    <div className="movie-recommendations">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-recommendation">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          {/* TODO: Implement user ratings and feedback */}
        </div>
      ))}
    </div>
  );
}

export default MovieRecommendations;
