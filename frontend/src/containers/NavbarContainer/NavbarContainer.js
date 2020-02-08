import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';
import { Logo, Button } from '../../components';

import logoUser from '../../img/avatar.png';
import { Navbar, UserContainer, TitleContainer } from './NavbarStyle';
import { signOut } from '../../store/ducks/auth';

function NavbarContainer() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <Logo small white />
      <TitleContainer>
        <h2>
          BUG C
          <img
            src="https://i.pinimg.com/originals/b7/9d/a2/b79da21793843b4e27afe36d05714707.png"
            alt="bug"
          />
          NTROL
        </h2>
      </TitleContainer>
      <UserContainer>
        <div>
          <img src={logoUser} alt="avatar" width="50" height="50" />
        </div>
        <div>
          <span>Olá {user.name}</span>
          <span>{user.email}</span>
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
