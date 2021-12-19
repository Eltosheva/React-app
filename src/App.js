import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Add from './components/Add/Add';
import MyRecepts from './components/MyReceps/MyRecepts';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import GuardedRoute from './components/Common/GuardedRoute';
import PrivateRoute from './components/Common/PrivateRoute';
import ErrorBoundary from './components/Common/ErrorBoundary';

//import 'bootstrap/dist/css/bootstrap.min.css';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  }

  return (
    // <ErrorBoundary>
      <AuthProvider value={{user, login, logout}}>
        <div>
          <Header />
          <main id="site-content">
            <Routes>
              <Route path="/home/*" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-recepts" element={<PrivateRoute><MyRecepts /></PrivateRoute>} />
              <Route path="/details/:receptId" element={<Details />} />

              <Route element={<GuardedRoute />}>
                <Route path="/addRecepts" element={<Add />} />
                <Route path="/edit/:receptId" element={<Edit />} />
              </Route>
            </Routes>
            </main>

            <footer className='page-footer'>
                <p>@Delishes</p>
            </footer>
        </div>
      </AuthProvider>
    // </ErrorBoundary>
  );
}

export default App;