import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Add from './components/Add/Add';

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
    <AuthContext.Provider value={{user, login, logout}}>
    <div>
     <Header />
     <main id="site-content">
       <Routes>
         <Route path="/home/*" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/register" element={<Register />} />
         <Route path="/addRecepts" element={<Add />} />
       </Routes>
       </main>

       <footer id="site-footer">
           <p>@Delishes</p>
       </footer>
    </div>
    </AuthContext.Provider>
  );
}

export default App;