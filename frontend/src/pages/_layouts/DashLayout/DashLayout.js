import React from 'react';

import { Wrapper } from './DashStyle';

import { NavbarContainer } from '../../../containers';

export default function AuthenticatedLayoutAuthLayout({ children }) {
  return (
    <Wrapper>
      <NavbarContainer />
      {children}
    </Wrapper>
  );
}
