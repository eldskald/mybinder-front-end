import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { UseRequestData, UseRequestResponse } from 'utils/types';

const API_URL: string = import.meta.env.API_URL as string;

function useRequest(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  headers: object = {}
): UseRequestResponse {
  const [firstCall, setFirstCall] = useState<boolean>(true);
  const [requesting, setRequesting] = useState<boolean>(true);
  const [requestData, setRequestData] = useState<UseRequestData>({
    method, route, body: {}, headers
  });
  const [response, setResponse] = useState<AxiosResponse | undefined>(undefined);
  const [error, setError] = useState<AxiosError | undefined>(undefined);
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
        setResponse(res);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
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