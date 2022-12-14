import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useRequest, usePopup } from 'hooks';
import { PulseLoader } from 'react-spinners';

import {
  Container,
  TitleWrapper,
  SubtitleWrapper,
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
  const [submitting, sendRequest] = useRequest();
  const popup = usePopup();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (submitting) return;
    if (passwordConfirm !== password) {
      setMessage('Confirm your password correctly');
      return;
    }
    setMessage('');
    sendRequest(
      'post',
      '/sign-up',
      { username, displayname, password },
      () => {
        popup('Account created successfully.', () => {navigate('/')});
      },
      err => {
        setMessage(err.message);
      }
    );
  }

  return (
    <>
      <Helmet>
        <title>MyBinder | Sign Up</title>
      </Helmet>
      <TitleWrapper>Sign Up</TitleWrapper>
      <SubtitleWrapper>
        Create an account now and start creating your own personalized web pages!
      </SubtitleWrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <InputField
            id='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            data-cy='USERNAME'
            disabled={submitting}
            autoFocus
          />
          <InputLabel htmlFor='displayname'>Displayname</InputLabel>
          <InputField
            id='displayname'
            type='text'
            value={displayname}
            onChange={e => setDisplayname(e.target.value)}
            data-cy='DISPLAYNAME'
            disabled={submitting}
          />
          <InputLabel htmlFor='password'>Password</InputLabel>
          <InputField
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            data-cy='PASSWORD'
            disabled={submitting}
          />
          <InputLabel htmlFor='passwordConfirm'>Confirm Password</InputLabel>
          <InputField
            id='passwordConfirm'
            type='password'
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            data-cy='PASSWORD_CONFIRM'
            disabled={submitting}
          />
          {message ? (
            <MessageContainer>{message}</MessageContainer>
          ) : (
            <></>
          )}
          <SubmitButton type='submit' data-cy='SUBMIT'>
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

export default SignUp;