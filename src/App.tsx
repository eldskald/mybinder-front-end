import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, PopupContext } from 'contexts';
import { GlobalStyle, Main, PageContainer, Spacer } from 'assets/styles';
import { Landing, SignUp, SignIn } from 'pages';
import { Popup } from 'components';
import { User } from 'utils/types'

function App() {
  const [user, setUser] = useState<User>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [onCloseFunctions, setOnCloseFunctions] = useState<(() => void)[]>([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <PopupContext.Provider value={{ messages, setMessages, onCloseFunctions, setOnCloseFunctions }}>
          <BrowserRouter>
              <Main>
                <PageContainer>
                  <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignIn />} />
                  </Routes>
                  <Spacer length='242px' />
                </PageContainer>
              </Main>
              <Popup />
          </BrowserRouter>
        </PopupContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;