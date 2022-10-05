import { useContext } from 'react';
import { PopupContext } from 'contexts';

function usePopup(): (message: string, onClose?: () => void) => void {
  const { messages, setMessages, onCloseFunctions, setOnCloseFunctions } = useContext(PopupContext);
  return (message, onClose?) => {
    const newOnClose = onClose ? onClose : () => {return};
    setOnCloseFunctions([...onCloseFunctions, newOnClose]);
    setMessages([...messages, message]);
  }
}

export default usePopup;