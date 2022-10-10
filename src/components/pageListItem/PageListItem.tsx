import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { Page } from 'utils/types';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { VscOpenPreview } from 'react-icons/vsc';
import {
  Container,
  Title,
  UpdateForm,
  InputWrapper,
  InputField,
  SubmitButton,
  DeleteButton,
  MessageContainer,
  ButtonsWrapper
} from './PageListItem.styles';

function PageListItem(props: { page: Page, reloadPages: () => void }) {
  const { page, reloadPages } = props;
  const [newTitle, setNewTitle] = useState<string>(page.title);
  const [newUrlName, setNewUrlName] = useState<string>(page.urlName);
  const [message, setMessage] = useState<string>('');
  const { user } = useContext(UserContext);
  const popup = usePopup();
  const [changingTitle, changeTitleRequest] = useRequest();
  const [changingUrl, changeUrlRequest] = useRequest();
  const [deleting, deleteRequest] = useRequest();
  
  function handleClickDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    popup(
      `Are you sure you want to delete page ${page.title}`,
      () => {
        deleteRequest(
          'delete',
          `/pages/${page.id}`,
          {},
          () => {
            popup('Page deleted successfully', reloadPages);
          },
          err => {
            popup(err.message);
          },
          { headers: {
            Authorization: `Bearer ${user?.token}`
          }}
        );
      },
      () => {return;}
    );
  }

  function handleChangeTitle(e: React.SyntheticEvent) {
    e.preventDefault();
    if (changingTitle) return;
    setMessage('');
    changeTitleRequest(
      'patch',
      `/pages/${page.id}`,
      { title: newTitle },
      reloadPages,
      err => setMessage(err.message),
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  function handleChangeUrl(e: React.SyntheticEvent) {
    e.preventDefault();
    if (changingUrl) return;
    setMessage('');
    changeUrlRequest(
      'patch',
      `/pages/${page.id}`,
      { urlName: newUrlName },
      reloadPages,
      err => setMessage(err.message),
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  return (
    <Container>
      <Title>{page.title}</Title>
      <UpdateForm onSubmit={handleChangeTitle}>
        <InputWrapper>
          <InputField
            id='changeTitle'
            type='text'
            value={newTitle}
            disabled={changingTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <SubmitButton type='submit'>
            Update Title
          </SubmitButton>
        </InputWrapper>
      </UpdateForm>
      <UpdateForm onSubmit={handleChangeUrl}>
        <InputWrapper>
          <InputField
            id='changeTitle'
            type='text'
            value={newUrlName}
            disabled={changingUrl}
            onChange={e => setNewUrlName(e.target.value)}
          />
          <SubmitButton type='submit'>
            Update URL
          </SubmitButton>
        </InputWrapper>
      </UpdateForm>
      {message ? (
        <MessageContainer>{message}</MessageContainer>
      ) : (
        <></>
      )}
      <ButtonsWrapper>
        <Link to={`/edit/${page.urlName}`}>
          <FaEdit /> Edit
        </Link>
        <Link to={`/${user?.username}/${page.urlName}`}>
          <VscOpenPreview /> View
        </Link>
        <DeleteButton
          onClick={handleClickDelete}
          disabled={deleting}
        >
          <FaTrashAlt /> Delete
        </DeleteButton>
      </ButtonsWrapper>
    </Container>
  );
}

export default PageListItem;