/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import Cast from '../components/show/Cast';

import { apiGet } from '../misc/config';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  const { id } = useParams();

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCCESS': {
        return { isLoading: false, error: null, show: action.show };
      }

      case 'FETCH_FAILED': {
        return { ...prevState, isLoading: false, error: action.error };
      }

      default:
        return prevState;
    }
  };
  const initialState = {
    show: null,
    isLoading: true,
    error: null,
  };
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=cast&embed[]=seasons`)
      .then(result => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCCESS', show: result });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) return <div>Data is Loading</div>;
  if (error)
    return (
      <div>
        Error Occured
        {error}
      </div>
    );
  return (
    <ShowPageWrapper>
      <ShowMainData
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
        image={show.image}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          premiered={show.premiered}
          network={show.network}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
