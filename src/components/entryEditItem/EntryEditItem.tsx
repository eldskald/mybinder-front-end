import React, { useState, useEffect, useContext } from 'react';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { Entry, EntryType } from 'utils/types';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
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
  ButtonsWrapper
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

  function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    if (deleting) return;
    popup(
      'Delete this entry?',
      () => deleteRequest(
        'delete',
        `/entries/${pageId}/${entry.entryId}`,
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
      `/entries/${pageId}/${entry.entryId}`,
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

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <InputWrapper show>
          <InputDesc>
            Entry type:
          </InputDesc>
          <EntryTypeInput>
            <option value='title' onClick={() => setType('title')}>Title</option>
            <option value='thumbnail' onClick={() => setType('thumbnail')}>Thumbnail</option>
            <option value='text' onClick={() => setType('text')}>Text</option>
            <option value='image' onClick={() => setType('image')}>Image</option>
            <option value='space' onClick={() => setType('space')}>Spacer</option>
          </EntryTypeInput>
        </InputWrapper>
        <InputWrapper show={type === 'title' || type === 'thumbnail' || type === 'text'}>
          <InputDesc>Title:</InputDesc>
          <InputField
            id='title'
            type='text'
            value={title}
            disabled={updating}
            onChange={e => setTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'title' || type === 'thumbnail'}>
          <InputDesc>Description:</InputDesc>
          <InputLargeField
            id='description'
            value={description}
            disabled={updating}
            onChange={e => setDescription(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'text' || type === 'thumbnail'}>
          <InputDesc>Text:</InputDesc>
          <InputLargeField
            id='text'
            value={text}
            disabled={updating}
            onChange={e => setText(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'image' || type === 'thumbnail'}>
          <InputDesc>Image URL:</InputDesc>
          <InputField
            id='imageUrl'
            type='text'
            value={imageUrl}
            disabled={updating}
            onChange={e => setImageUrl(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper show={type === 'thumbnail'}>
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