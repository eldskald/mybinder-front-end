import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, PopupContext } from 'contexts';
import { autoLogin } from 'services';
import { GlobalStyle, Main, PageContainer, Spacer } from 'assets/styles';
import { Landing, SignUp, Login } from 'pages';
import { CoverSpinner, Header, Popup } from 'components';
import { User } from 'utils/types'

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [onCloseFunctions, setOnCloseFunctions] = useState<(() => void)[]>([]);
  const [loadingUser] = autoLogin(setUser);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <PopupContext.Provider value={{ messages, setMessages, onCloseFunctions, setOnCloseFunctions }}>
          <BrowserRouter>
            <Header />
            <Main>
              <PageContainer>
                <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/sign-up' element={<SignUp />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
                <Spacer length='242px' />
              </PageContainer>
            </Main>
            <CoverSpinner loading={loadingUser} />
            <Popup />
          </BrowserRouter>
        </PopupContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;