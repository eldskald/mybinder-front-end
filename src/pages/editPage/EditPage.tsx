import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { usePopup, useRequest } from 'hooks';
import { loginGate } from 'services';
import { UserContext } from 'contexts';
import { Entry, FullPage } from 'utils/types';
import {
  Container,
  ErrorMessage
} from './EditPage.styles';

function EditPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [pageId, setPageId] = useState<number>(0);
  const [pageError, setPageError] = useState<string>('');
  const { user } = useContext(UserContext);
  const { pageName, username } = useParams();
  const navigate = useNavigate();
  const popup = usePopup();
  const [loadingEntries, loadEntriesRequest] = useRequest<FullPage>();
  const [creatingEntry, createEntryRequest] = useRequest();

  useEffect(loadEntries, []);
  loginGate(navigate);

  function loadEntries() {
    setPageError('');
    loadEntriesRequest(
      'get',
      `/entries/${user?.username}/${pageName}`,
      {},
      res => {
        setEntries([...res.data.entries]);
        setPageId(res.data.pageId);
      },
      err => {
        setPageError(err.message);
      }
    );
  }

  function handleNewEntry(e: React.SyntheticEvent) {
    e.preventDefault();
    createEntryRequest(
      'post',
      `/entries/${[pageId]}`,
      {},
      () => popup('Entry created!', loadEntries),
      err => popup(err.message),
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  return (
    <>
      <Helmet>
        <title>{`MyBinder | Editting ${pageName}`}</title>
      </Helmet>
      {pageError ? (
        <ErrorMessage>{pageError}</ErrorMessage>
      ) : (<></>)}
      <Container>

      </Container>
    </>
  );
}

export default EditPage;