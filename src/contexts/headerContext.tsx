import React, { createContext } from 'react';

const HeaderContext = createContext<{
  noHeader: boolean,
  setNoHeader: React.Dispatch<React.SetStateAction<boolean>>
}>({ noHeader: false, setNoHeader: () => {return;} });

export default HeaderContext;