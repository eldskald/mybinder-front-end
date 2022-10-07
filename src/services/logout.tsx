import { removeToken } from 'services';
import { User } from 'utils/types';

function logout(setUser: React.Dispatch<React.SetStateAction<User | null>>): void {
  setUser(null);
  removeToken();
}

export default logout;