import React from 'react';

import { Wrapper, Content, TitleContainer } from './DashStyle';

import { NavbarContainer } from '../../../containers';

export default function AuthenticatedLayoutAuthLayout({ children }) {
  return (
   
      
      <Wrapper>
        <NavbarContainer />
        <Content>{children}</Content>
      </Wrapper>
 
  );
}
