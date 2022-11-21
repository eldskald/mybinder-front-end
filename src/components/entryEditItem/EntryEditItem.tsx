import React, { useState, useEffect, useContext } from 'react';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { Entry, EntryType } from 'utils/types';
import { FaTrashAlt } from 'react-icons/fa';
import {
  AiOutlineEdit,
  AiOutlineArrowDown,
  AiOutlineArrowUp
} from 'react-icons/ai';
import {
  Container,
  EntryTypeInput,
  FormContainer,
  InputDesc,
  InputField,
  InputLargeField,
  InputWrapper,
  UpdateButton,
  DeleteButton,
  MessageContainer,
  ButtonsWrapper,
  MoveButtonsWrapper,
  MoveButton
} from './EntryEditItem.styles';

function EntryEditItem(props: {
  entry: Entry,
  pageId: number,
  reloadEntries: () => void
}) {
  const { entry, pageId, reloadEntries } = props;
  const { user } = useContext(UserContext);
  const [type, setType] = useState<EntryType>(entry.type);
  const [title, setTitle] = useState<string>(entry.title);
  const [description, setDescription] = useState<string>(entry.description);
  const [text, setText] = useState<string>(entry.text);
  const [imageUrl, setImageUrl] = useState<string>(entry.imageUrl);
  const [sourceUrl, setSourceUrl] = useState<string>(entry.sourceUrl);
  const [space, setSpace] = useState<number>(entry.space);
  const [message, setMessage] = useState<string>('');
  const popup = usePopup();
  const [updating, updateRequest] = useRequest();
  const [deleting, deleteRequest] = useRequest();
  const [moving, moveRequest] = useRequest();

  useEffect(() => {}, [])

  function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    if (deleting || moving) return;
    popup(
      'Delete this entry?',
      () => deleteRequest(
        'delete',
        `/entries/${pageId}/${entry.id}`,
        {},
        () => {
          popup('Entry deleted', reloadEntries);
        },
        err => {
          popup(err.message);
        },
        { headers: {
          Authorization: `Bearer ${user?.token}`
        }}
      ),
      () => {return;}
    );
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (updating) return;
    setMessage('');
    updateRequest(
      'put',
      `/entries/${pageId}/${entry.id}`,
      {
        type,
        title: title ? title : undefined,
        description: description ? description : undefined,
        text: text ? text : undefined,
        imageUrl: imageUrl ? imageUrl : undefined,
        sourceUrl: sourceUrl ? sourceUrl : undefined,
        space: space ? space : undefined
      },
      () => {
        popup('Entry updated', reloadEntries);
      },
      err => {
        popup(err.message);
      },
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  function handleMoveUp(e: React.SyntheticEvent) {
    e.preventDefault();
    if (moving  || deleting) return;
    moveRequest(
      'patch',
      `/entries/move-up/${pageId}/${entry.id}`,
      {},
      () => {
        popup('Entry moved up in the order', reloadEntries);
      },
      err => {
        popup(err.message)
      },
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  function handleMoveDown(e: React.SyntheticEvent) {
    e.preventDefault();
    if (moving || deleting) return;
    moveRequest(
      'patch',
      `/entries/move-down/${pageId}/${entry.id}`,
      {},
      () => {
        popup('Entry moved down in the order', reloadEntries);
      },
      err => {
        popup(err.message)
      },
      { headers: {
        Authorization: `Bearer ${user?.token}`
      }}
    );
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <MoveButtonsWrapper>
          <MoveButton onClick={handleMoveUp}>
            <AiOutlineArrowUp />
            Move Up
          </MoveButton>
          <MoveButton onClick={handleMoveDown}>
            <AiOutlineArrowDown />
            Move Down
          </MoveButton>
        </MoveButtonsWrapper>
        <InputWrapper show>
          <InputDesc>
            Entry type:
          </InputDesc>
          <EntryTypeInput value={type}>
            <option value='title' onClick={() => setType('title')}>Title</option>
            <option value='project' onClick={() => setType('project')}>Project</option>
            <option value='text' onClick={() => setType('text')}>Text</option>
            <option value='image' onClick={() => setType('image')}>Image</option>
          </EntryTypeInput>
        </InputWrapper>
        <InputWrapper show={type === 'title' || type === 'project' || type === 'text'}>
          <InputDesc>Title:</InputDesc>
          <InputField
            id='title'
            type='text'
            value={title}
            disabled={updating}
            onChange={e => setTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'title' || type === 'project'}>
          <InputDesc>Description:</InputDesc>
          <InputLargeField
            id='description'
            value={description}
            disabled={updating}
            onChange={e => setDescription(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'text' || type === 'project'}>
          <InputDesc>Text:</InputDesc>
          <InputLargeField
            id='text'
            value={text}
            disabled={updating}
            onChange={e => setText(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'image' || type === 'project'}>
          <InputDesc>Image URL:</InputDesc>
          <InputField
            id='imageUrl'
            type='text'
            value={imageUrl}
            disabled={updating}
            onChange={e => setImageUrl(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'project'}>
          <InputDesc>Source URL:</InputDesc>
          <InputField
            id='sourceUrl'
            type='text'
            value={sourceUrl}
            disabled={updating}
            onChange={e => setSourceUrl(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'space'}>
          <InputDesc>Spacer size:</InputDesc>
          <InputField
            id='space'
            type='number'
            value={space}
            disabled={updating}
            onChange={e => setSpace(Number(e.target.value))}
          />
        </InputWrapper>
        {message ? (
          <MessageContainer>{message}</MessageContainer>
        ) : (
          <></>
        )}
        <ButtonsWrapper>
          <UpdateButton type='submit'>
            <AiOutlineEdit />
            Update Entry
          </UpdateButton>
          <DeleteButton onClick={handleDelete}>
            <FaTrashAlt />
            Delete
          </DeleteButton>
        </ButtonsWrapper>
      </FormContainer>
    </Container>
  );
}

export default EntryEditItem;