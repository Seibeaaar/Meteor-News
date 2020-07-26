import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainNews from './pages/MainNews';
import FullPageLoader from './components/app/FullPageLoader';

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
