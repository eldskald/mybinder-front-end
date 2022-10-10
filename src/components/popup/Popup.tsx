import React, { useContext } from 'react';
import { PopupContext } from 'contexts';
import {
  Background,
  PopupContainer,
  Message,
  ButtonContainer,
  OkButton,
  CancelButton
} from './Popup.styles';

function Popup() {
  const { popups, setPopups } = useContext(PopupContext);

  if (popups.length === 0) return (<></>);

  const message = popups[popups.length - 1].message;
  const onOk = popups[popups.length - 1].onOk;
  const onCancel = popups[popups.length - 1].onCancel;

  function handleOk(e: React.SyntheticEvent) {
    onOk();
    setPopups(prev => prev.slice(0, -1));
  }

  function handleCancel(e: React.SyntheticEvent) {
    if (onCancel) onCancel();
    setPopups(prev => prev.slice(0, -1));
  }

  return (
    <Background>
      <PopupContainer>
        <Message>
          {message}
        </Message>
        <ButtonContainer>
          <OkButton onClick={handleOk} data-cy='POPUP_OK'>
            Ok
          </OkButton>
          {onCancel ? (
            <CancelButton onClick={handleCancel} data-cy='POPUP_CANCEL'>
              Cancel
            </CancelButton>
          ) : (<></>)}
        </ButtonContainer>
      </PopupContainer>
    </Background>
  );
}

export default Popup;