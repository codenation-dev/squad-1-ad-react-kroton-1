import React, { useState } from 'react';
import { MdAdd, MdSearch, MdDeleteForever,MdExpandLess,MdExpandMore, MdArrowBack, MdClose} from 'react-icons/md';

import { Container } from './ErrorDetailStyle';
import { ErrorDetailsContainer } from '../../containers';
import { Button, ButtonInverted, Input, EventComponent } from '../../components';

function ErrorDetail() {
  const [title, setTitle] = useState([]);

  return (
      <ErrorDetailsContainer/>
  );
}

export default ErrorDetail;
