import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchBar.value });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          id="searchBar"
          autoFocus
          placeholder="type here"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList query={query} />
    </div>
  );
};

export default Movies;
