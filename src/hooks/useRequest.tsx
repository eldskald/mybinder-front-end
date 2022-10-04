import { useState, useEffect } from 'react';
import axios from 'axios';
import { UseRequestResponse, UseRequestError, UseRequestReturn } from 'utils/types';

const API_URL: string = import.meta.env.VITE_API_URL as string;

function useRequest(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  headers: object = {}
): UseRequestReturn {
  // const [firstCall, setFirstCall] = useState<boolean>(true);
  // const [requesting, setRequesting] = useState<boolean>(true);
  // const [requestData, setRequestData] = useState<object>({});
  // const [thenFunc, setThenFunc] = useState<(res: UseRequestResponse) => void>(() => {return});
  // const [catchFunc, setCatchFunc] = useState<(err: UseRequestError) => void>(() => {return});
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   if (firstCall) {
  //     setFirstCall(false);
  //     return;
  //   }

  //   setLoading(true);
  //   axios[method](
  //     API_URL + route,
  //     requestData,
  //     headers
  //   )
  //     .then(res => {
  //       thenFunc({ status: res.status, data: res.data });
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       let error: UseRequestError = { status: 500, message: 'Internal server error' };
  //       if (axios.isAxiosError(err) && err.response)
  //         error = { status: err.response.status, message: err.response.data as string };
  //       catchFunc(error);
  //       setLoading(false);
  //     });
  // }, [requesting]);

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
        catchFn(error);
        setLoading(false);
      });

    // setRequestData(body);
    // setThenFunc(thenFn);
    // setCatchFunc(catchFn);
    // setRequesting(!requesting);
  }
  
  return [loading, sendRequest];
}

export default useRequest;