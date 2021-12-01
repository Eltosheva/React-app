
import { Switch, Route } from 'react-router-dom';
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
       <switch>
         <Route path="/home" components={Home}></Route>
         <Login/>
         <Register/>
         <Add/>
       </switch>
       </main>

       <footer id="site-footer">
           <p>@Delishes</p>
       </footer>
    </div>
  );
}

export default App;
