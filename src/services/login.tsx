import { useContext } from 'react';
import { UserContext } from 'contexts';
import { saveToken } from 'services';
import { User } from 'utils/types';

function login(data: User): void {
  if (!data) return;
  const { user, setUser } = useContext(UserContext);
  setUser(data);
  saveToken(data.token);
}

export default login;