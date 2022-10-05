import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'hooks';
import { PulseLoader } from 'react-spinners';

import {
  Container,
  TitleWrapper,
  FormContainer,
  InputLabel,
  InputField,
  SubmitButton,
  MessageContainer
} from './SignIn.styles';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, sendRequest] = useRequest('post', '/sign-in');
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (submitting) return;
    setMessage('');
    sendRequest(
      { username, password },
      res => {
        console.log(res.data);
        navigate('/');
      },
      err => {
        setMessage(err.message);
      }
    );
  }

  return (
    <>
      <TitleWrapper>Sign In</TitleWrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <InputField
            id='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <InputLabel htmlFor='password'>Password</InputLabel>
          <InputField
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
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
    </>
  );
}

export default SignIn;