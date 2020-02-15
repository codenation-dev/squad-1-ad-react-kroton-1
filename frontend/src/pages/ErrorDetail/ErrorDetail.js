import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ErrorDetailsContainer } from '../../containers';

import { getBug } from '../../store/ducks/bug';

function ErrorDetail({ match }) {
  const currentBug = useSelector(state => state.bug.currentBug);
  const dispatch = useDispatch();
  const [bug, setBug] = useState({});

  useEffect(() => {
    dispatch(getBug(match.params.log_id));
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {};

  return <ErrorDetailsContainer bug={currentBug} />;
}

export default ErrorDetail;
