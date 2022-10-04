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

export type UseRequestResponse = [
  response: AxiosResponse | undefined,
  error: AxiosError | undefined,
  loading: boolean,
  sendRequest: Function
];