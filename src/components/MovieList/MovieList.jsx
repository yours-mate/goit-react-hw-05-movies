import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchMoviesByName } from 'services/API/MovieAPI';
import PropTypes from 'prop-types';

const MovieList = ({ query }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  useEffect(() => {
    if (query === null) {
      console.log('Enter search query');
      setSearchedMovies([]);
      return;
    }
    if (query.trim() === '') {
      console.log('Enter search query');
      setSearchedMovies([]);
      return;
    }
    FetchMoviesByName(query).then(data => setSearchedMovies(data.results));
  }, [query]);
  return (
    <main>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MovieList;

MovieList.propTypes = {
  query: PropTypes.string,
};
