import React, { useEffect, useContext } from 'react';
import { useNavigate, Routes } from 'react-router-dom';
import { UserContext } from 'contexts';
import { getToken, logout } from 'services';

export function ProtectedRoutes(props: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext);
  const token = getToken();
  useEffect(() => {
    if (!token || !user) logout(setUser, navigate);
  }, []);

  return (
    <Routes>
      {props.children}
    </Routes>
  );
}