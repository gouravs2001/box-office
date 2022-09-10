import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

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
  const [state, dispatch] = useReducer(reducer, initialState);
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

  //   if (isLoading) return <div>Data is Loading</div>;
  //   if (error)
  //     return (
  //       <div>
  //         Error Occured
  //         {error}
  //       </div>
  //     );
  return <div>Show</div>;
};

export default Show;
