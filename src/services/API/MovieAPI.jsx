const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '80e1a152823a6639f7fd4a96e32f567c';

export async function FetchTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error('An error occured. Please refresh the page.')
  );
}

export async function FetchMovieInfo(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error('An error occured. Please refresh the page.')
  );
}

export async function FetchMovieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error('An error occured. Please refresh the page.')
  );
}

export async function FetchMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error('An error occured. Please refresh the page.')
  );
}

export async function FetchMoviesByName(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error('An error occured. Please refresh the page.')
  );
}
