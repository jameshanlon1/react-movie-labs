import AddMovieReviewPage from './pages/addMovieReviewPage'
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import Upcoming from "./pages/upcoming";
import Trending from './pages/trendingPage';
import TopRated from './pages/topRatedMoviesPage';
import MovieActorsPage from './pages/movieActorPage';
import ActorPage from './pages/actorsPage';
import ActorDetailPage from './pages/actorDetailsPage';
import SearchPage from './pages/searchPage';
import SignupPage from './pages/signupPage';
import LoginPage from './pages/loginPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/actors/:id" element={<ActorDetailPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/movies/upcoming" element={<Upcoming />} />
            <Route path="/movies/trending/today" element={<Trending />} />
            <Route path="/movies/ratings" element={<TopRated />} />
            
            <Route path="/movies/:id/actors" element={ <MovieActorsPage /> } />
            <Route path="/movies/actors" element={ <ActorPage /> } />

            <Route path="/movies/search" element={ <SearchPage /> } />


            <Route path="/movies/signup" element={<SignupPage/>} />
            <Route path="/movies/login" element={<LoginPage/>} />

            
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

