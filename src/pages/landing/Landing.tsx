import { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { UserContext } from 'contexts';
import { getToken } from 'services';
import { HeaderText } from './Landing.styles';

function Landing() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (!getToken) setUser(null);
  }, [])

  return (
    <>
      <Helmet>
        <title>MyBinder</title>
      </Helmet>
      <HeaderText>Teste testão testamento</HeaderText>
    </>
  );
}

export default Landing;