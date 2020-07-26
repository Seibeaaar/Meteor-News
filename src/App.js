import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainNews from './pages/MainNews';

const App = () => {
  return ( 
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainNews}/>
      </Switch>
    </Router>
  );
}
 
export default App;
