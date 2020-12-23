import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import About from './components/About'
import './App.css';
import Api from './components/Api'
import Home from './components/Home'

function App() {
  return (
    <Router>
     <div >
    <Navbar/>
    <div >
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/api" component={Api}/>
    </Switch>
    </div>
    </div>
   
    </Router>
    
   
   
  );
}

export default App;
