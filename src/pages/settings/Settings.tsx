import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { PulseLoader } from 'react-spinners';
import { loginGate } from 'services';
import {
  Container,
  FormContainer,
  TitleWrapper,
  InputLabel,
  InputField,
  MessageContainer,
  SubmitButton,
  Text
} from './Settings.styles';

function Settings() {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [displayname, setDisplayname] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { user, setUser } = useContext(UserContext);
  const [submitting, sendRequest] = useRequest();
  const navigate = useNavigate();
  const popup = usePopup();

  loginGate(navigate);
  useEffect(() => {
    if (user) setDisplayname(user.displayname);
  }, [user]);
  
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (submitting || !user) return;
    if (passwordConfirm !== newPassword) {
      setMessage('Confirm your password correctly');
      return;
    }
    setMessage('');
    const data: {
      newPassword?: string,
      oldPassword?: string,
      displayname?: string
    } = {};
    if (newPassword) {
      data.newPassword = newPassword;
      data.oldPassword = oldPassword;
    }
    if (displayname) {
      data.displayname = displayname;
    }
    sendRequest(
      'put',
      '/users/update',
      data,
      () => {
        if (data.displayname) {
          setUser({
            ...user,
            displayname: data.displayname
          });
        }
        setOldPassword('');
        setNewPassword('');
        setPasswordConfirm('');
        popup('Update successful!');
      },
      err => {
        setMessage(err.message);
      },
      { headers: { Authorization: `Bearer ${user?.token}` }}
    );
  }

  return (
    <>
      <Helmet>
        <title>MyBinder | Account Settings</title>
      </Helmet>
      <TitleWrapper>Account Settings</TitleWrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <Text>
            Change your password
          </Text>
          <InputLabel htmlFor='oldPassword'>Old password</InputLabel>
          <InputField
            id='oldPassword'
            type='password'
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            disabled={submitting}
          />
          <InputLabel htmlFor='newPassword'>New password</InputLabel>
          <InputField
            id='newPassword'
            type='password'
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            disabled={submitting}
          />
          <InputLabel htmlFor='passwordConfirm'>Confirm new password</InputLabel>
          <InputField
            id='passwordConfirm'
            type='password'
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            disabled={submitting}
          />
          <Text>
            Change your display name
          </Text>
          <InputLabel htmlFor='displayname'>Display name</InputLabel>
          <InputField
            id='displayname'
            type='text'
            value={displayname}
            onChange={e => setDisplayname(e.target.value)}
            disabled={submitting}
          />
          {message ? (
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

export default Settings;