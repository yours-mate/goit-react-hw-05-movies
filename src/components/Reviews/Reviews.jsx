import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from 'services/API/MovieAPI';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.length === 0 && (
        <p>
          There are no reviews for this movie. Take a risk and get your own
          impression.
        </p>
      )}
      {reviews.length > 0 &&
        reviews.map(review => (
          <ReviewsItem key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </ReviewsItem>
        ))}
    </ReviewsList>
  );
};

export default Reviews;
