import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchMoviesByName } from 'services/API/MovieAPI';
const MovieList = ({ query }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  console.log(query);
  useEffect(() => {
    if (query === null) {
      console.log('Enter search query');
      return;
    }
    if (query.trim() === '') {
      console.log('Enter search query');
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
