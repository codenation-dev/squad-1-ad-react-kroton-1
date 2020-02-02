import React from 'react';
import logo from '../../img/logo.png';
import logoWhite from '../../img/logo.png';

import { Logo } from './LogoStyle';

export default function LogoComponent({ small, white }) {
  return <Logo small={small} alt="logo" src={white ? logoWhite : logo} />;
}
