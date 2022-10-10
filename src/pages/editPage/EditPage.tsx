import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { usePopup, useRequest } from 'hooks';
import { loginGate } from 'services';
import { UserContext } from 'contexts';
import { FaRegPlusSquare } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';
import { Entry, FullPage } from 'utils/types';
import { EntryEditItem } from 'components';
import {
  Container,
  ErrorMessage,
  Spinner
} from './EditPage.styles';

function EditPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [pageId, setPageId] = useState<number>(0);
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageError, setPageError] = useState<string>('');
  const { user } = useContext(UserContext);
  const { pageUrl } = useParams();
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
      `/entries/${user?.username}/${pageUrl}`,
      {},
      res => {
        setEntries(res.data.entries);
        setPageId(res.data.id);
        setPageTitle(res.data.title);
      },
      err => {
        setPageError(err.message);
      }
    );
  }

  function handleNewEntry(e: React.SyntheticEvent) {
    e.preventDefault();
    if (creatingEntry) return;
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
        <title>{`MyBinder | Editting ${pageTitle}`}</title>
      </Helmet>
      {loadingEntries ? (
        <Spinner>
          <MoonLoader />
        </Spinner>
      ) : (
        pageError ? (
          <ErrorMessage>{pageError}</ErrorMessage>
        ) : (
          <>
            {entries.map((entry, index) => (
              <EntryEditItem
                key={index}
                entry={entry}
                pageId={pageId}
                reloadEntries={loadEntries}
              />
            ))}
            <Container onClick={handleNewEntry}>
              Add an Entry
              <FaRegPlusSquare
                size={100}
              />
            </Container>
          </>
        )
      )}
    </>
  );
}

export default EditPage;