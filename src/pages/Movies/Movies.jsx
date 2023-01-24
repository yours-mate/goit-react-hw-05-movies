import { Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar, SearchBtn, Form } from './Movies.styled';

const MovieList = lazy(() => import('components/MovieList/MovieList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  let inputValue = '';

  const onChangeInput = e => {
    inputValue = e.target.value;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: inputValue });
    form.reset();
  };
  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <SearchBar
          type="text"
          autoComplete="off"
          id="searchBar"
          autoFocus
          placeholder="type here"
          onChange={onChangeInput}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList query={query} />
      </Suspense>
    </div>
  );
};

export default Movies;
