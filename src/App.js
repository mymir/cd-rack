import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
import ResetPassword from './views/ResetPassword'
import Layout from './layout/Layout';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
