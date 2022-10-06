import React, { createContext } from 'react';
import { User } from 'utils/types';

const UserContext = createContext<{
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}>({ user: null, setUser: () => {return} });

export default UserContext;