import React, { createContext } from 'react';

const PopupContext = createContext<{
  messages: string[],
  setMessages: React.Dispatch<React.SetStateAction<string[]>>,
  onCloseFunctions: (() => void)[],
  setOnCloseFunctions: React.Dispatch<React.SetStateAction<(() => void)[]>>,
}>({
  messages: [],
  setMessages: () => {return},
  onCloseFunctions: [],
  setOnCloseFunctions: () => {return}
});

export default PopupContext;