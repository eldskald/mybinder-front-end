import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, PopupContext } from 'contexts';
import { autoLogin } from 'services';
import { GlobalStyle, Main, PageContainer, Spacer } from 'assets/styles';
import { CoverSpinner, Header, Popup } from 'components';
import { User, PopupData } from 'utils/types'
import {
  Landing,
  SignUp,
  Login,
  Settings,
  Dashboard
} from 'pages';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [loadingUser] = autoLogin(setUser);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <PopupContext.Provider value={{ popups, setPopups }}>
          <BrowserRouter>
            {!loadingUser ? (
              <>
                <Header />
                <Main>
                  <PageContainer>
                    <Routes>
                      <Route path='/' element={<Landing />} />
                      <Route path='/sign-up' element={<SignUp />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/settings' element={<Settings />} />
                      <Route path='/dashboard' element={<Dashboard />} />
                    </Routes>
                    <Spacer length='242px' />
                  </PageContainer>
                </Main>
                <Popup />
              </>
            ) : (
              <CoverSpinner loading={loadingUser} />
            )}
          </BrowserRouter>
        </PopupContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;