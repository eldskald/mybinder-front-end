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
const [loadingEntries, loadEntriesRequest] = useRequest<{
  id: number,
  title: string,
  entries: {
    id: number,
    pageId: number,
    index: number,
    type: 'title' | 'thumbnail' | 'text' | 'image' | 'space',
    title: string,
    description: string,
    text: string,
    imageUrl: string,
    sourceUrl: string,
    space: number
  }[]
}>();
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
        setEntries(res.data.entries.map(value => ({
          entryId: value.id,
          type: value.type,
          index: value.index,
          title: value.title,
          description: value.description,
          text: value.text,
          imageUrl: value.imageUrl,
          sourceUrl: value.sourceUrl,
          space: value.space
        })));
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