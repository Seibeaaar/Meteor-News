import React, {
  Suspense
} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import FullPageLoader from './components/app/FullPageLoader';
import FooterContainer from './components/Footer/FooterContainer';

const MainNews = React.lazy(() => import('./pages/MainNews'));

const App = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Header />
      <Navbar />
      <MainNews />
      <FooterContainer />
    </Suspense>
  );
}

export default App;