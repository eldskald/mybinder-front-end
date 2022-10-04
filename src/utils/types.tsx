import { AxiosResponse, AxiosError } from 'axios';

export type User = {
  id: number,
  username: string,
  displayname: string,
  token: string
} | null

export type UseRequestData = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  body: object,
  headers: object
};

export type UseRequestResponse = {
  status: number,
  data: object | string | number
};

export type UseRequestError = {
  status: number,
  message: string
};

export type UseRequestReturn = [
  response: UseRequestResponse | undefined,
  error: UseRequestError | undefined,
  loading: boolean,
  sendRequest: Function
];