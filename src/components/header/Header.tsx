import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoStories } from 'react-icons/md';

import {
  Buttons,
  Container,
  LoginButton,
  Logo,
  SignUpButton
} from './Header.styles';

function Header() {
  return (
    <Container>
      <Logo>
        <Link to='/'>
          <MdAutoStories />
          <p>MyBinder</p>
        </Link>
      </Logo>
      <Buttons>
        <Link to='/login'>
          Login
        </Link>
        <Link to='/sign-up'>
          Sign Up
        </Link>
      </Buttons>
    </Container>
  );
}

export default Header;