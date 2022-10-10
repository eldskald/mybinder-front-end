import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, PopupContext, HeaderContext } from 'contexts';
import { autoLogin } from 'services';
import { GlobalStyle } from 'assets/styles';
import { Main, CoverSpinner, Header, Popup } from 'components';
import { User, PopupData } from 'utils/types'
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
  const [loadingUser] = autoLogin(setUser);

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
                      <Route path='/settings' element={<Settings />} />
                      <Route path='/dashboard' element={<Dashboard />} />
                      <Route path='/edit/:pageUrl' element={<EditPage />} />
                      <Route path='/view/:username/:pageUrl' element={<ViewPage />} />
                    </Routes>
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