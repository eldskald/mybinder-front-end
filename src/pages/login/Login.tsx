import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { UserContext } from 'contexts';
import { login } from 'services';
import { useRequest } from 'hooks';
import { PulseLoader } from 'react-spinners';
import { User } from 'utils/types'
import {
  Container,
  TitleWrapper,
  FormContainer,
  InputLabel,
  InputField,
  SubmitButton,
  MessageContainer,
  Text,
  Link
} from './Login.styles';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const [submitting, sendRequest] = useRequest<User>('post', '/sign-in');
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (submitting) return;
    setMessage('');
    sendRequest(
      { username, password },
      res => {
        login(res.data, setUser);
        navigate('/');
      },
      err => {
        setMessage(err.message);
      }
    );
  }

  return (
    <>
      <Helmet>
        <title>MyBinder | Login</title>
      </Helmet>
      <TitleWrapper>Sign in to your account</TitleWrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <InputField
            id='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          <InputLabel htmlFor='password'>Password</InputLabel>
          <InputField
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {message  ? (
            <MessageContainer>{message}</MessageContainer>
          ) : (
            <></>
          )}
          <SubmitButton type='submit'>
            {submitting ? (
              <PulseLoader
                color={'var(--contrastcolor1)'}
                size={15}
              />
            ) : (
              'Submit'
            )}
          </SubmitButton>
        </FormContainer>
      </Container>
      <Text>
        Don't have an account yet? <Link onClick={() => navigate('/sign-up')}>Sign up!</Link>
      </Text>
    </>
  );
}

export default Login;