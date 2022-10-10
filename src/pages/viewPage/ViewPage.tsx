import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HeaderContext } from 'contexts';
import { useRequest } from 'hooks';
import { MoonLoader } from 'react-spinners';
import { FullPage } from 'utils/types';
import {
  EntryTitle,
  EntryThumbnail,
  EntryText,
  EntryImage,
  EntrySpace
} from 'components/entries';
import {
  ErrorMessage,
  SpinnerWrapper
} from './ViewPage.styles';

function ViewPage() {
  const [data, setData] = useState<FullPage | null>(null);
  const [error,setError] = useState<string>('');
  const { username, pageUrl } = useParams();
  const { setNoHeader, noHeader } = useContext(HeaderContext);
  const [loading, sendRequest] = useRequest<FullPage>();

  useEffect(() => {
    setNoHeader(true);
    sendRequest(
      'get',
      `/entries/${username}/${pageUrl}`,
      {},
      res => setData(res.data),
      err => setError(err.message)
    );
  }, [])

  return (
    loading ? (
      <SpinnerWrapper>
        <MoonLoader color='var(--maincolor)' />
      </SpinnerWrapper>
    ) : (
      error ? (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      ) : (
        <>
          <Helmet>
            <title>{`My Binder | ${data?.title}`}</title>
          </Helmet>
          {data ? (
            data.entries.map((entry, index) => (
              entry.type === 'title' ? (
                <EntryTitle key={index} entry={entry} />
              ) : (
                entry.type === 'thumbnail' ? (
                  <EntryThumbnail key={index} entry={entry} />
                ) : (
                  entry.type === 'text' ? (
                    <EntryText key={index} entry={entry} />
                  ) : (
                    entry.type === 'image' ? (
                      <EntryImage key={index} entry={entry} />
                    ) : (<EntrySpace key={index} entry={entry} />)
            )))))
          ) : (<></>)}
        </>
      )
    )
  );
}

export default ViewPage;