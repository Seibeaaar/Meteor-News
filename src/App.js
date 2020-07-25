import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return ( 
    <Router>
      <Header />
      <Navbar />
      <Switch>
      </Switch>
    </Router>
  );
}
 
export default App;
