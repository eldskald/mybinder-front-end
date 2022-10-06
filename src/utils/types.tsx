export type User = {
  username: string,
  displayname: string,
  token: string
};

export type UseRequestResponse<Type> = {
  status: number,
  data: Type
}

export type UseRequestError = {
  status: number,
  message: string
};

export type UseRequestReturn<Type> = [
  loading: boolean,
  sendRequest: (
    body: object,
    thenFn: (res: UseRequestResponse<Type>) => void,
    catchFn: (err: UseRequestError) => void
  ) => void
];