import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken, removeToken } from './tokenServices';
import { usePopup } from 'hooks';
import { User } from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function autoLogin(
  setUser: React.Dispatch<React.SetStateAction<User | null>>
): [boolean] {
  const [loading, setLoading] = useState<boolean>(true);
  const popup = usePopup();
  
  useEffect(() => {
    const token = getToken();
    if (!token) {
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
          userId: res.data.id,
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