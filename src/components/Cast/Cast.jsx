import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../services/images/defImg.jpeg';
import { FetchMovieCast } from '../../services/API/MovieAPI';
import { CastList, ActorInfo, Image } from './Cast.styled';

const BASE_IMAGE = 'https://image.tmdb.org/t/p/w300/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieCast(movieId).then(castInfo => {
      const sortedCast = castInfo.cast.map(actor => ({
        image: actor.profile_path
          ? `${BASE_IMAGE}${actor.profile_path}`
          : defaultImage,
        name: actor.name,
        character: actor.character,
      }));
      setCast(sortedCast);
    });
  }, [movieId]);

  return (
    <CastList>
      {cast.map(actor => (
        <ActorInfo key={actor.name}>
          <Image src={actor.image} alt={actor.name} />
          <p>Name: {actor.name}</p>
          <p>Character: {actor.character}</p>
        </ActorInfo>
      ))}
    </CastList>
  );
};

export default Cast;
