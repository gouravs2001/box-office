import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=cast&embed[]=seasons`).then(result => {
      setShow(result);
    });
  }, [id]);
  console.log(show);
  return <div>Show</div>;
};

export default Show;