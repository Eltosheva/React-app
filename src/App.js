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
       <Home/>
       <Login/>
       <Register/>
       <Add/>
       </main>

       <footer id="site-footer">
           <p>@Delishes</p>
       </footer>

     
    </div>
  );
}

export default App;
