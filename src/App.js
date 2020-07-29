import React, {
  Suspense
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import FullPageLoader from './components/app/FullPageLoader';

const MainNews = React.lazy(() => import('./pages/MainNews'));

const App = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainNews}/>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;