import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoStories } from 'react-icons/md';
import { UserContext } from 'contexts';
import {
  Buttons,
  Container,
  Logo,
} from './Header.styles';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Logo>
        <Link to='/'>
          <MdAutoStories />
          <p>MyBinder</p>
        </Link>
      </Logo>
      <Buttons>
        {user ? (
          `Hi ${user.displayname}`
        ) : (
          <>
            <Link to='/login'>
              Login
            </Link>
            <Link to='/sign-up'>
              Sign Up
            </Link>
          </>
        )}
      </Buttons>
    </Container>
  );
}

export default Header;