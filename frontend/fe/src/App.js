// import logo from './logo.svg';
import './App.css';

import HomeNav from './pages/homepage/HomeNav.js'
import Homescreen from './pages/homepage/homescreen.js'
import Clogin from './pages/clogin/clogin.js'
import Slogin from './pages/slogin/slogin.js'
import Testpage from './pages/testpage/testpage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
         
function App() {
                           
  return (
    <BrowserRouter>
      <div className = "App">
        <HomeNav />
      </div>       
      <Switch>               
        <Route path="/" exact component = {Homescreen} />
        <Route path="/slogin" component = {Slogin} />
        <Route path="/clogin" component = {Clogin} />
        <Route path="/testpage" component = {Testpage} />
      </Switch>          
    </BrowserRouter>
  );         
}

export default App;
        