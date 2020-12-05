import logo from './logo.svg';
import './App.css';

import Text from "./Text.js"
import Trial from "./trial.js"
import CounselorNav from './CounselorNav.js'

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div className = "App">
        <CounselorNav />
      </div>
      <Switch>
        <Route path="/" exact component = {Text} />
        <Route path="/trial" component = {Trial} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
