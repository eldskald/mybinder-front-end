import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  UseRequestData,
  UseRequestResponse,
  UseRequestError,
  UseRequestReturn
} from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function useRequest(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  headers: object = {}
): UseRequestReturn {
  const [firstCall, setFirstCall] = useState<boolean>(true);
  const [requesting, setRequesting] = useState<boolean>(true);
  const [requestData, setRequestData] = useState<UseRequestData>({
    method, route, body: {}, headers
  });
  const [response, setResponse] = useState<UseRequestResponse | undefined>(undefined);
  const [error, setError] = useState<UseRequestError | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (requestData === null || firstCall) {
      setFirstCall(false);
      return;
    }

    setLoading(true);
    axios[requestData.method](
      API_URL + requestData.route,
      requestData.body,
      requestData.headers
    )
      .then(res => {
        setResponse({ status: res.status, data: res.data });
        setLoading(false);
      })
      .catch(err => {
        if (axios.isAxiosError(err) && err.response)
          setError({ status: err.response.status, message: err.response.data as string })
        else setError({ status: 500, message: 'Internal server error' });
        setLoading(false);
      });
  }, [requesting]);

  function sendRequest(body: object = {}) {
    setRequestData({ method, route, body, headers });
    setRequesting(!requesting);
  }
  
  return [response, error, loading, sendRequest];
}

export default useRequest;