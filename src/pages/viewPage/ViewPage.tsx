import { useState, useEffect } from 'react';
import { useRequest } from 'hooks';
import { FullPage } from 'utils/types';
import {
  Container
} from './ViewPage.styles';

function ViewPage() {
  const [data, setData] = useState<FullPage | null>(null);
  const [loading, sendRequest] = useRequest();
}

export default ViewPage;