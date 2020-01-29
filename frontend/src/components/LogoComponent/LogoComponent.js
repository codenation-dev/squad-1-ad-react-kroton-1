import React from 'react';
import logo from '../../img/icon.png';
import logoWhite from '../../img/icon_white.png';

import { Logo } from './LogoStyle';

export default function LogoComponent({ small, white }) {
  return <Logo small={small} alt="logo" src={white ? logoWhite : logo} />;
}
