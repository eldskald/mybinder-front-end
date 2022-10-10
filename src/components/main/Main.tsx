import React, { useContext } from 'react';
import { HeaderContext } from 'contexts';
import {
  MainContainer,
  PageContainer,
  Spacer
} from './Main.styles'

function Main(props: { children: React.ReactNode }) {
  const { noHeader } = useContext(HeaderContext);

  return (
    <MainContainer noHeader={noHeader}>
      <PageContainer>
        {props.children}
        <Spacer length='242px' />
      </PageContainer>
    </MainContainer>
  );
}

export default Main;