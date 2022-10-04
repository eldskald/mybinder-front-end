import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'contexts';
import { GlobalStyle } from 'assets/styles';
import { Landing, SignUp } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={null}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;