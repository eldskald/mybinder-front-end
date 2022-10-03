import { createContext } from 'react';
import { User } from 'utils/types';

export const UserContext = createContext<User>({} as User);