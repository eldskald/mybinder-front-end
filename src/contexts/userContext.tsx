import { createContext } from 'react';
import { User } from 'utils/types';

const UserContext = createContext<User>({} as User);

export default UserContext;