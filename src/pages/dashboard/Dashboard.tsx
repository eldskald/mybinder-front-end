import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { loginGate } from 'services';
import { MoonLoader, PulseLoader } from 'react-spinners';
import { Page } from 'utils/types';
import {
  Container,
  TitleWrapper,
  Text,
  FormContainer,
  InputWrapper,
  InputField,
  MessageContainer,
  SubmitButton
} from './Dashboard.styles';

function Dashboard() {
  const [pages, setPages] = useState<Page[] | 'error'>([]);
  const [newPageTitle, setNewPageTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loadingPages, getPagesRequest] = useRequest<Page[]>('get', '/pages');
  const [creatingPage, createPageRequest] = useRequest('post', '/pages');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const popup = usePopup();
  
  loginGate(navigate);
  useEffect(loadPages, []);

  function loadPages() {
    if (!user) return;
    getPagesRequest(
      {},
      res => {
        setPages(res.data);
      },
      err => {
        popup(err.message);
        setPages('error');
      },
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  function handleSubmitNewPage(e: React.SyntheticEvent) {
    e.preventDefault();
    createPageRequest(
      { title: newPageTitle },
      _res => {
        loadPages();
        setNewPageTitle('');
      },
      err => {
        setMessage(err.message);
      },
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  return (
    <>
      <Helmet>
        <title>MyBinder | Dashboard</title>
      </Helmet>
      <TitleWrapper>Dashboard</TitleWrapper>
      <Container>
        <Text>
          Create a new page
        </Text>
        <FormContainer onSubmit={handleSubmitNewPage}>
          <InputWrapper>
            <Text>{`mybinder.com/${user?.username}/`}</Text>
            <InputField
              id='newPageTitle'
              type='newPageTitle'
              value={newPageTitle}
              placeholder='new-page-name'
              onChange={e => setNewPageTitle(e.target.value)}
            />
          </InputWrapper>
          {message ? (
            <MessageContainer>{message}</MessageContainer>
          ) : (
            <></>
          )}
          <SubmitButton type='submit'>
            {creatingPage ? (
              <PulseLoader
                color={'var(--contrastcolor1)'}
                size={15}
              />
            ) : (
              'Create Page'
            )}
          </SubmitButton>
        </FormContainer>
      </Container>
    </>
  );
}

export default Dashboard;