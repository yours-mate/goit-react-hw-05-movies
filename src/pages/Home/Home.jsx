import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchTrendingMovies } from 'services/API/MovieAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    FetchTrendingMovies().then(movies => setTrendingMovies(movies.results));
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
