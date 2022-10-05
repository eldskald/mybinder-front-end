import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken, removeToken } from './tokenServices';
import { usePopup } from 'hooks';
import { User } from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function autoLogin(
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
): [boolean] {
  const [loading, setLoading] = useState<boolean>(true);
  const popup = usePopup();
  
  useEffect(() => {
    const token = getToken();
    if (!token || user) {
      setLoading(false);
      return;
    };

    axios.get(
      `${API_URL}/sign-in-from-token`,
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    )
      .then(res => {
        setUser({
          username: res.data.username,
          displayname: res.data.displayname,
          token
        });
        setLoading(false);
      })
      .catch(_err => {
        popup('Automatic login failed');
        removeToken();
        setLoading(false);
      });
  }, []);

  return [loading];
}

export default autoLogin;