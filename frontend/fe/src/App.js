// import logo from './logo.svg';
import './App.css';

import HomeNav from './pages/homepage/HomeNav.js'
import Homescreen from './pages/homepage/homescreen.js'
import Clogin from './pages/clogin/clogin.js'
import Slogin from './pages/slogin/slogin.js'
import Testpage from './pages/testpage/testpage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CounselorSignup from './pages/csignup/csignup';
import StudentSignup from './pages/ssignup/ssignup';
import SPageScreen from './pages/spage/spagescreen';
import CPageScreen from './pages/cpage/cpagescreen';
import Counselor from './pages/cpage/students';
         
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
        <Route path="/csignup" component = {CounselorSignup}/>
        <Route path="/ssignup" component = {StudentSignup}/>
        <Route path="/spage" component = {SPageScreen}/>
        <Route path="/cpage" exact component={CPageScreen} />
        <Route path="/students" component = {Counselor} />
      </Switch>          
    </BrowserRouter>
  );         
}

export default App;
        