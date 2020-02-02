import React, { useState } from 'react';
import { Logo, Button} from '../../components';
import { MdExitToApp } from 'react-icons/md';

import logoUser from '../../img/avatar.png';
import { Navbar, UserContainer, TitleContainer } from './NavbarStyle';

function NavbarContainer() {
  const [nomeUser, setNomeUser] = useState('Nome User');
  const [token, setToken] = useState('Token');

  return (
    <Navbar>
      <Logo small white />
      <TitleContainer>
          <h2>BUG C<img src='https://i.pinimg.com/originals/b7/9d/a2/b79da21793843b4e27afe36d05714707.png' alt='bug'></img>NTROL</h2>
          
      </TitleContainer>
      <UserContainer>
        <div>
          <img src={logoUser} alt="avatar" width="50" height="50" />
        </div>
        <div>
          <span>Olá {nomeUser}</span>
          <span>{token}</span>
        </div>
        <div>
          <Button type="submit" value="Sair" icon={<MdExitToApp/>} text='Sair'  />
        </div>
      </UserContainer>
    </Navbar>
  );
}

export default NavbarContainer;
