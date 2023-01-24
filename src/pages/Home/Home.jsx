import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FetchTrendingMovies } from 'services/API/MovieAPI';
import { ListItem } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchTrendingMovies().then(movies => setTrendingMovies(movies.results));
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(movie => (
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

export default Home;
