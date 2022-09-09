import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCardStyled';

const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 20).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div>
        <img src={image} alt="show" className="img-wrapper" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" className="btns">
          Star me
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
