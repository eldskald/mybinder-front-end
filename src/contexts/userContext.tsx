import React, { createContext } from 'react';
import { User } from 'utils/types';

const UserContext = createContext<{
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
}>({ user: null, setUser: () => {return} });

export default UserContext;