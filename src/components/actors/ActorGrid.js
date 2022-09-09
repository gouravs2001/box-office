import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            country={person.country ? person.country.name : null}
            image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          />
        );
      })}
    </div>
  );
};

export default ActorGrid;
