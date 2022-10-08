import { useEffect, useContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { UserContext } from 'contexts';
import { getToken, logout } from 'services';

function loginGate(navigate: NavigateFunction) {
  const { user, setUser } = useContext(UserContext);
  const token = getToken();
  useEffect(() => {
    if (!token || !user) logout(setUser, navigate);
  }, []);
}

export default loginGate;