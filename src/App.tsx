import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </Suspense>
  );
}

export default App;
