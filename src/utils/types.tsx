import { AxiosRequestConfig } from "axios";

export type User = {
  id: number,
  username: string,
  displayname: string,
  token: string
};

export type Page = {
  id: number,
  title: string,
  urlName: string
}

export type FullPage = Page & { entries: Entry[] };

export type EntryType =
  'title' |
  'image' |
  'thumbnail' |
  'text' |
  'space'

export type Entry = {
  id: number,
  type: EntryType,
  index: number,
  title: string,
  description: string,
  text: string,
  imageUrl: string,
  sourceUrl: string,
  space: number
}

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
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    route: string,
    body: object,
    thenFn: (res: UseRequestResponse<Type>) => void,
    catchFn: (err: UseRequestError) => void,
    config?: AxiosRequestConfig<any>
  ) => void
];

export type PopupData = {
  message: string,
  onOk: () => void,
  onCancel: (() => void) | null
}