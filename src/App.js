
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
     <Header/>
     <main id="site-content">
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<Login onLogin={onLogin}/>} />
         {/* <Route path="/logout" element={<Logout />} /> */}
         <Route path="/register" element={<Register />} />
         <Route path="/add" element={<Add />} />
       </Routes>
       </main>

       <footer id="site-footer">
           <p>@Delishes</p>
       </footer>
    </div>
  );
}

export default App;
