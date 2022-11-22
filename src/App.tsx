import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, PopupContext, HeaderContext } from 'contexts';
import { useAutoLogin } from 'services';
import { GlobalStyle } from 'assets/styles';
import { User, PopupData } from 'utils/types'
import {
  Main,
  CoverSpinner,
  Header,
  Popup,
  ProtectedRoutes
} from 'components';
import {
  Landing,
  SignUp,
  Login,
  Settings,
  Dashboard,
  EditPage,
  ViewPage
} from 'pages';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [noHeader, setNoHeader] = useState<boolean>(false);
  const [loadingUser] = useAutoLogin(setUser);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <PopupContext.Provider value={{ popups, setPopups }}>
          <HeaderContext.Provider value={{ noHeader, setNoHeader }}>
            <BrowserRouter>
              {!loadingUser ? (
                <>
                  <Header />
                  <Main>
                    <Routes>
                      <Route path='/' element={<Landing />} />
                      <Route path='/sign-up' element={<SignUp />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/:username/:pageUrl' element={<ViewPage />} />
                    </Routes>
                    <ProtectedRoutes>
                      <Route path='/settings' element={<Settings />} />
                      <Route path='/dashboard' element={<Dashboard />} />
                      <Route path='/edit/:pageUrl' element={<EditPage />} />
                    </ProtectedRoutes>
                  </Main>
                  <Popup />
                </>
              ) : (
                <CoverSpinner loading={loadingUser} />
              )}
            </BrowserRouter>
          </HeaderContext.Provider>
        </PopupContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;