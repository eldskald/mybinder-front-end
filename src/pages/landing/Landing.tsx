import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MdAutoStories } from 'react-icons/md';
import { UserContext } from 'contexts';
import {
  LogoWrapper,
  TitleWrapper,
  Text,
  LinkWrapper
} from './Landing.styles';

function Landing() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [])

  return (
    <>
      <Helmet>
        <title>MyBinder</title>
      </Helmet>
      <LogoWrapper>
        <MdAutoStories color='var(--maincolor)' size='160px' />
        <h1>MyBinder</h1>
      </LogoWrapper>
      <TitleWrapper>Welcome to MyBinder!</TitleWrapper>
      <Text>
        MyBinder is an app for creating personal pages like portfolios, resumes and others. It's designed to be easy to learn and to quickly make beautiful results. No need to have any knowledge in web development.
      </Text>
      <Text>
        To start using, just make an account. It's totally free and we don't collect anything from you, not even your email.
      </Text>
      <LinkWrapper>
        <Link to='/sign-up'>
          Click here to start!
        </Link>
      </LinkWrapper>
    </>
  );
}

export default Landing;