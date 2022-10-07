import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdAutoStories, MdLogout, MdOutlineSettings } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { logout } from 'services';
import {
  Buttons,
  Container,
  DropdownButton,
  DropdownMenu,
  Logo,
  UserContainer,
  UserMessage,
} from './Header.styles';

function Header() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const popup = usePopup();

  useEffect(() => {
    setDropdown(false);
  }, [location]);

  function handleLogout() {
    popup(
      'Are you sure you want to log out?',
      () => {
        logout(setUser);
        navigate('/');
      },
      () => {return;}
    );
  }

  return (
    <>
      <Container>
        <Logo>
          <Link to='/'>
            <MdAutoStories />
            <p>MyBinder</p>
          </Link>
        </Logo>
        {user ? (
          <UserContainer>
            <UserMessage>
              {`Hi, ${user.displayname}!`}
            </UserMessage>
            <DropdownButton active={dropdown}>
              <IoIosArrowDropdown onClick={() => setDropdown(prev => !prev)} />
            </DropdownButton>
          </UserContainer>
        ) : (
          <Buttons>
            <Link to='/login'>
              Login
            </Link>
            <Link to='/sign-up'>
              Sign Up
            </Link>
          </Buttons>
        )}
      </Container>
      <DropdownMenu active={dropdown}>
        <Link to='/dashboard'>
          <RiDashboardLine />Dashboard
        </Link>
        <Link to='/settings'>
          <MdOutlineSettings />Account settings
        </Link>
        <div onClick={handleLogout}>
          <MdLogout />Log Out
        </div>
      </DropdownMenu>
    </>
  );
}

export default Header;