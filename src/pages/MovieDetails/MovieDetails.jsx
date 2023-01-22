import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieInfo } from '../../services/API/MovieAPI';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieInfo(movieId).then(movie =>
      setMovieInfo({
        banner: movie.backdrop_path,
        title: movie.title,
        year: movie.release_date,
        score: movie.vote_average,
        overview: movie.overview,
        genres: movie.genres,
      })
    );
  }, [movieId]);

  return <div>Movie details of {movieInfo.title}</div>;
};

export default MovieDetails;
