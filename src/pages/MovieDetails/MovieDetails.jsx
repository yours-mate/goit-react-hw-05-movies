import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { FetchMovieInfo } from '../../services/API/MovieAPI';
import {
  Container,
  MovieThumb,
  MovieOverview,
  MoreInfo,
  Link,
} from './MovieDetails.styled';

const BASE_IMAGE = 'https://image.tmdb.org/t/p/w400/';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieInfo(movieId).then(movie => {
      console.log(movie);
      setMovieInfo({
        banner: `${BASE_IMAGE}${movie.poster_path}`,
        title: movie.title,
        year: movie.release_date.substring(0, 4),
        score: movie.vote_average,
        overview: movie.overview,
        genres: movie.genres.map(genre => genre.name).join(', '),
      });
    });
  }, [movieId]);

  return (
    <Container>
      <button type="button">Go back</button>
      <MovieThumb>
        <img src={movieInfo.banner} alt={movieInfo.title} />
        <MovieOverview>
          <h2>
            {movieInfo.title} ({movieInfo.year})
          </h2>
          <p>User score: {movieInfo.score}</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h4>Genres</h4>
          <p>{movieInfo.genres}</p>
        </MovieOverview>
      </MovieThumb>

      <MoreInfo>
        <h5>Additional information</h5>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </MoreInfo>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
