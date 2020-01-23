import React, { useState } from 'react';
import { Logo } from '../../components';

import logoUser from '../../img/avatar.png';
import { Navbar, UserContainer } from './NavbarStyle';

function NavbarContainer() {
  const [nomeUser, setNomeUSer] = useState('Nome User');
  const [token, setToken] = useState('Token');

  return (
    <Navbar>
      <Logo small white />
      <UserContainer>
        <div>
          <img src={logoUser} alt="avatar" width="50" height="50" />
        </div>
        <div>
          <span>Olá {nomeUser}</span>
          <span>{token}</span>
        </div>
      </UserContainer>
    </Navbar>
  );
}

export default NavbarContainer;
