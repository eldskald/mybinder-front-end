import React, { useState, useEffect, useContext } from 'react';
import { useRequest, usePopup } from 'hooks';
import { UserContext } from 'contexts';
import { Entry } from 'utils/types';
import {
  Container
} from './EntryEditItem.styles';

function EntryEditItem(props: { entry: Entry, pageId: number }) {
  return (<></>);
}

export default EntryEditItem;