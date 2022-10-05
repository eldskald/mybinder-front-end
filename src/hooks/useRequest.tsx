import { useState } from 'react';
import axios from 'axios';
import { UseRequestResponse, UseRequestError, UseRequestReturn } from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function useRequest(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  headers: object = {}
): UseRequestReturn {
  const [loading, setLoading] = useState<boolean>(false);

  function sendRequest(
    body: object,
    thenFn: (res: UseRequestResponse) => void,
    catchFn: (err: UseRequestError) => void
  ) {
    setLoading(true);
    axios[method](
      API_URL + route,
      body,
      headers
    )
      .then(res => {
        thenFn({ status: res.status, data: res.data });
        setLoading(false);
      })
      .catch(err => {
        let error: UseRequestError = { status: 500, message: 'Internal server error' };
        if (axios.isAxiosError(err) && err.response)
          error = { status: err.response.status, message: err.response.data as string };
        else console.log(err);
        catchFn(error);
        setLoading(false);
      });
  }
  
  return [loading, sendRequest];
}

export default useRequest;