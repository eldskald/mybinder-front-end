import { useState } from 'react';
import { PageContainer } from 'assets/styles';

import {
  Container,
  TitleWrapper,
  FormContainer,
  InputLabel,
  InputField
} from './SignUp.styles';

function SignUp() {
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <PageContainer>
      <Container>
        <TitleWrapper>Sign Up</TitleWrapper>
        <FormContainer>
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
        </FormContainer>
      </Container>
    </PageContainer>
  );
}

export default SignUp;