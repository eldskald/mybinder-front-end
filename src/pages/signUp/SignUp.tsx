import React, { useState } from 'react';
import { useRequest } from 'hooks';
import { PulseLoader } from 'react-spinners';
import { PageContainer } from 'assets/styles';

import {
  Container,
  TitleWrapper,
  FormContainer,
  InputLabel,
  InputField,
  SubmitButton,
  MessageContainer
} from './SignUp.styles';

function SignUp() {
  const [username, setUsername] = useState<string>('');
  const [displayname, setDisplayname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, sendRequest] = useRequest('post', '/sign-up');

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (loading) return;
    if (passwordConfirm !== password) {
      setMessage('Confirm your password correctly');
      return;
    }
    setMessage('');
    sendRequest(
      { username, displayname, password },
      res => {
        console.log(res.status);
        console.log(res.data);
      },
      err => {
        setMessage(err.message);
      }
    );
  }

  return (
    <PageContainer>
      <Container>
        <TitleWrapper>Sign Up</TitleWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <InputField
            id='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <InputLabel htmlFor='displayname'>Displayname</InputLabel>
          <InputField
            id='displayname'
            type='text'
            value={displayname}
            onChange={e => setDisplayname(e.target.value)}
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
          <InputLabel htmlFor='passwordConfirm'>Confirm Password</InputLabel>
          <InputField
            id='passwordConfirm'
            type='password'
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            required
          />
          {message  ? (
            <MessageContainer>{message}</MessageContainer>
          ) : (
            <></>
          )}
          <SubmitButton type='submit'>
            {loading ? (
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
    </PageContainer>
  );
}

export default SignUp;