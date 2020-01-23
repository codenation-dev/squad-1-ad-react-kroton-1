import React from 'react';

import { Wrapper, Content } from './LoginStyle';

export default function LoginLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
