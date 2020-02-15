import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';
import { Logo, Button } from '../../components';

import logoUser from '../../img/avatar.png';
import logoBugControl from '../../img/logoBugControl.png';
import { Navbar, UserContainer, TitleContainer } from './NavbarStyle';
import { signOut } from '../../store/ducks/auth';

function NavbarContainer() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <Logo small white />
      <TitleContainer>
        <h2>
          <img 
            id='logoBugControl'
            src={logoBugControl}
            alt="bug"
            
          />
        </h2>
      </TitleContainer>
      <UserContainer>
        <div>
          <img
          id='logoUser' 
          src={logoUser} alt="avatar"/>
        </div>
        <div>
          <span>Olá Usário</span>
          <span>e-mail</span>
        </div>
        <div>
          <Button
            type="button"
            value="Sair"
            icon={<MdExitToApp />}
            text="Sair"
            onClick={() => dispatch(signOut())}
          />
        </div>
      </UserContainer>
    </Navbar>
  );
}

export default NavbarContainer;
