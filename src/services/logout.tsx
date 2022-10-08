import { NavigateFunction } from 'react-router-dom';
import { removeToken } from 'services';
import { User } from 'utils/types';

function logout(
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  navigate: NavigateFunction
): void {
  setUser(null);
  removeToken();
  navigate('/');
}

export default logout;