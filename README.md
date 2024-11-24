# Assignment 1 - ReactJS app.

Name: James Hanlon

## Overview.

This is my asssignment 1 for web development. this repository is a combination of in class labs and addded features for my assignment.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Recommended movies added below movie details.
+ Trending movies in navigation
+ Popular actors, filter between male and female or both.
+ View actors who cast in movie.
+ Actor details, with movies they acted in.
+ Pagination add to upcoming movies page.
+ Firebase Authtentication. Login, sign up, logout.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.


e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Movie actors - /movies/:id/actors
+ Actor Details - /movies/actors/:id
+ Upcoming movies - /movies/upcoming
+ Trending Movies- /movies/trending/today
+ Discover actors - /movies/actors
+ Search movies - /movies/search
+ Login/logout page - /movies/login
+ Signup page - /movies/signup

## Routing.

+ /movies/:id/actors - displays the list of actors in a specific movie.
+ /movies/actors/:id - displays details of a specific actor.
+ /movies/upcoming - displays a list of upcoming movies.
+ /movies/trending/today - displays today's trending movies.
+ /movies/actors - displays a discoverable list of actors. Sorted by most popular.
+ /movies/search - displays search results for movies.
+ /movies/login - displays the login/logout page.
+ /movies/signup - displays the signup page.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

A user can login or signup and then login into there account. when they do so they are on the website on there account. I did not add any authentication so there are any protected aspects.

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

The technologies/techniques that I researched independentlt were, getting the list of actors to display, trying to implement the search bar(doesnt search, just throws back an error), setting up firebase with authentication and filter option on actors list.

Getting the list of actors was similar to list of movies. But instead of the data displaying beinf results it was cast. I also chnaged the style of the actor card as I didnt want any icons or button on the card. For adding a sorting filter on the actor list I used the genre filter to help me. I Tried to implement the search bar in the same way as the filter. But becasue I was using the seach api from TMDB I had to figure out to do this. This search feature would not work for me. I was getting 'props.movies.map' was undefined. I had to do some error checking and found that I was displaying the movies with just 'result', when I changed this to 'data.results || []' the search movies from the api began to display properly.

For firebase, I use this website article called "How to Use Firebase Authentication in a React App" to help me learn how to implement the authentication. Witht he help from google authentication steps and this website I was able to firgure out how to implement a successful login,signup and logout.
https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/


