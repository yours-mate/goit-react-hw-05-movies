import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FetchMoviesByName } from 'services/API/MovieAPI';
import { ListItem } from './MovieList.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const MovieList = ({ query }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (query === null || query.trim() === '') {
      toast.warning('Enter search query');
      setSearchedMovies([]);
      return;
    }
    FetchMoviesByName(query).then(data => {
      if (data.results.length === 0) {
        toast.error(
          'There are no movies corresponding to your search. Enter a valid text.'
        );
        setSearchedMovies([]);
        return;
      }
      setSearchedMovies(data.results);
    });
  }, [query]);
  return (
    <main>
      <ul>
        {searchedMovies.map(movie => (
          <ListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </main>
  );
};

export default MovieList;

MovieList.propTypes = {
  query: PropTypes.string,
};
