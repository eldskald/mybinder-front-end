import { useContext } from 'react';
import { UserContext } from 'contexts';
import { removeToken } from 'services';

function logout(): void {
  const { user, setUser } = useContext(UserContext);
  setUser(null);
  removeToken();
}

export default logout;