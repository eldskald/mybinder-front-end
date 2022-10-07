import React, { createContext } from 'react';
import { PopupData } from 'utils/types';

const PopupContext = createContext<{
  popups: PopupData[],
  setPopups: React.Dispatch<React.SetStateAction<PopupData[]>>
}>({ popups: [], setPopups: () => {return} });

export default PopupContext;