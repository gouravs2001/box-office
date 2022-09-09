import React from 'react';

const ActorCard = ({ name, birthday, deathday, gender, country, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>{name}</h1>
      <p>{gender ? `${gender}` : null}</p>
      <p>{birthday ? `Born on ${birthday}` : null}</p>

      <p>{deathday ? `Died on ${deathday}` : null}</p>
      <p>{country ? `Comes from ${country}` : null}</p>
    </div>
  );
};

export default ActorCard;
