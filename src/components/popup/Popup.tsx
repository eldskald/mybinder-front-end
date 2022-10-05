import React, { useContext } from 'react';
import { PopupContext } from 'contexts';
import {
  Background,
  PopupContainer,
  Message,
  Button
} from './Popup.styles';

function Popup() {
  const { messages, setMessages, onCloseFunctions } = useContext(PopupContext);

  function handleClick(e: React.SyntheticEvent) {
    const newMessages = [...messages];
    newMessages.pop();
    setMessages(newMessages);
    const onClose = onCloseFunctions.pop();
    if (onClose) onClose();
  }

  return (
    (messages.length === 0 ? (<></>) : (
      <Background>
        <PopupContainer>
          <Message>
            {messages[messages.length - 1]}
          </Message>
          <Button onClick={handleClick}>
            Ok
          </Button>
        </PopupContainer>
      </Background>
    ))
  );
}

export default Popup;