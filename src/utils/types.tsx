export type User = {
  id: number,
  username: string,
  displayname: string,
  token: string
} | null;

export type UseRequestResponse = {
  status: number,
  data: object | string | number
};

export type UseRequestError = {
  status: number,
  message: string
};

export type UseRequestReturn = [
  loading: boolean,
  sendRequest: (
    body: object,
    thenFn: (res: UseRequestResponse) => void,
    catchFn: (err: UseRequestError) => void
  ) => void
];