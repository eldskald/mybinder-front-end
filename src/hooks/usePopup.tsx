import { useContext } from 'react';
import { PopupContext } from 'contexts';

function usePopup(): (message: string, onOk?: () => void, onCancel?: () => void) => void {
  const { setPopups } = useContext(PopupContext);
  return (message, onOk?, onCancel?) => {
    const newOnOk = onOk ? onOk : () => {return};
    const newOnCancel = onCancel ? onCancel : null;
    setPopups(prev => [
      ...prev,
      { message, onOk: newOnOk, onCancel: newOnCancel }
    ]);
  }
}

export default usePopup;