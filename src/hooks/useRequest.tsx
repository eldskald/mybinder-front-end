import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { UseRequestResponse, UseRequestError, UseRequestReturn } from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function useRequest<Type>(): UseRequestReturn<Type> {
  const [loading, setLoading] = useState<boolean>(false);
  
  function sendRequest(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    route: string,
    body: object,
    thenFn: (res: UseRequestResponse<Type>) => void,
    catchFn: (err: UseRequestError) => void,
    config?: AxiosRequestConfig<any>,
  ) {
    setLoading(true);
    const url = API_URL + route;
    const thenFunc = (res: AxiosResponse<any, any>) => {
      thenFn({ status: res.status, data: res.data as Type });
      setLoading(false);
    };
    const catchFunc = (err: any) => {
      let error: UseRequestError = { status: 500, message: 'Internal server error' };
      if (axios.isAxiosError(err) && err.response)
        error = { status: err.response.status, message: err.response.data as string };
      else console.log(err);
      catchFn(error);
      setLoading(false);
    };
    switch (method) {
      case 'get': {
        axios.get(url, config).then(thenFunc).catch(catchFunc);
        break;
      }
      case 'post': {
        axios.post(url, body, config).then(thenFunc).catch(catchFunc);
        break;
      }
      case 'put': {
        axios.put(url, body, config).then(thenFunc).catch(catchFunc);
        break;
      }
      case 'patch': {
        axios.patch(url, body, config).then(thenFunc).catch(catchFunc);
        break;
      }
      case 'delete': {
        axios.delete(url, config).then(thenFunc).catch(catchFunc);
      }
    }
  }
  
  return [loading, sendRequest];
}

export default useRequest;