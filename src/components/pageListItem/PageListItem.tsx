import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { Page } from 'utils/types';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { VscOpenPreview } from 'react-icons/vsc';
import {
  Container,
  ChangeTitleForm,
  InputWrapper,
  InputField,
  SubmitButton,
  Title,
  TitleAndDeleteWrapper,
  DeleteButton,
  MessageContainer,
  ButtonsWrapper
} from './PageListItem.styles';

function PageListItem(props: { page: Page, reloadPages: () => void }) {
  const { page, reloadPages } = props;
  const [newTitle, setNewTitle] = useState<string>(page.title);
  const [message, setMessage] = useState<string>('');
  const { user } = useContext(UserContext);
  const popup = usePopup();
  const [changingTitle, changeTitleRequest] = useRequest();
  const [deleting, deleteRequest] = useRequest();
  
  function handleClickDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    popup(
      `Are you sure you want to delete page ${page.title}`,
      () => {
        deleteRequest(
          'delete',
          `/pages/${page.pageId}`,
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
      `/pages/changeTitle/${page.pageId}`,
      { title: newTitle },
      reloadPages,
      err => setMessage(err.message),
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  return (
    <Container>
      <TitleAndDeleteWrapper>
        <Title>{page.title}</Title>
        <DeleteButton
          onClick={handleClickDelete}
          disabled={deleting}
        >
          <FaTrashAlt /> Delete
        </DeleteButton>
      </TitleAndDeleteWrapper>
      <ChangeTitleForm onSubmit={handleChangeTitle}>
        <InputWrapper>
          <InputField
            id='changeTitle'
            type='text'
            value={newTitle}
            disabled={changingTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <SubmitButton type='submit'>
            Update name
          </SubmitButton>
        </InputWrapper>
      </ChangeTitleForm>
      {message ? (
        <MessageContainer>{message}</MessageContainer>
      ) : (
        <></>
      )}
      <ButtonsWrapper>
        <Link to={`/edit/${user?.username}/${page.title}`}>
          <FaEdit /> Edit
        </Link>
        <Link to={`/${user?.username}/${page.title}`} target={'_blank'}>
          <VscOpenPreview /> Preview
        </Link>
      </ButtonsWrapper>
    </Container>
  );
}

export default PageListItem;