// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FetchMoviesByName } from '../../services/API/MovieAPI';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleNameChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      console.log('Enter search query');
      return;
    }
    FetchMoviesByName(query).then(data => setSearchedMovies(data));
    setQuery('');
    e.target.reset();
    console.log(query, searchedMovies);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="type here"
        onChange={handleNameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
