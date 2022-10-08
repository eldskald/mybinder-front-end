import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { loginGate } from 'services';
import { MoonLoader, PulseLoader } from 'react-spinners';
import { PageListItem } from 'components';
import { Page } from 'utils/types';
import {
  Container,
  TitleWrapper,
  Text,
  FormContainer,
  InputWrapper,
  InputDesc,
  InputField,
  MessageContainer,
  SubmitButton,
  Spinner,
  NoPagesMessage
} from './Dashboard.styles';

function Dashboard() {
  const [pages, setPages] = useState<Page[] | 'error'>([]);
  const [newPageTitle, setNewPageTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const popup = usePopup();
  const [creatingPage, createPageRequest] = useRequest();
  const [loadingPages, getPagesRequest] = useRequest<{
    id: number,
    userId: number,
    title: string,
    createdAt: string
  }[]>();
  
  loginGate(navigate);
  useEffect(loadPages, []);

  function loadPages() {
    if (!user) return;
    getPagesRequest(
      'get',
      '/pages',
      {},
      res => {
        const data: Page[] = res.data.map(page => ({
          pageId: page.id,
          title: page.title
        }));
        setPages(data);
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
    if (creatingPage) return;
    setMessage('');
    createPageRequest(
      'post',
      '/pages',
      { title: newPageTitle },
      () => {
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
            <InputDesc>{`mybinder.com/${user?.username}/`}</InputDesc>
            <InputField
              id='newPageTitle'
              type='text'
              value={newPageTitle}
              placeholder='new-page-link'
              disabled={creatingPage}
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
      {loadingPages ? (
        <Spinner>
          <MoonLoader
            size={120}
            color='var(--maincolor)'
          />
        </Spinner>
      ) : (
        pages === 'error' ? (
          <MessageContainer>
            Loading pages failed!
          </MessageContainer>
        ) : (
          pages.length === 0 ? (
            <NoPagesMessage>
              You have no pages. Create one!
            </NoPagesMessage>
          ) : (
            <NoPagesMessage>
              {pages.map((value, index) => (
                <PageListItem
                  key={index}
                  page={value}
                  reloadPages={loadPages}
                />
              ))}
            </NoPagesMessage>
          )
        )
      )}
    </>
  );
}

export default Dashboard;