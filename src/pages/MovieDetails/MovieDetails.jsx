import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { FetchMovieInfo } from '../../services/API/MovieAPI';
import BackLink from 'components/BackLink/BackLink';
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
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  useEffect(() => {
    FetchMovieInfo(movieId).then(movie => {
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
      <BackLink to={backLink} />
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
        <Link to="cast" state={{ from: backLink }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backLink }}>
          Reviews
        </Link>
      </MoreInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {console.log(location)}
    </Container>
  );
};

export default MovieDetails;
