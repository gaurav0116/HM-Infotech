import React,{ useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';

/* ============ BOotstrap Bunddle  ===============*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const App = () => {

  // top bar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // GoTo Top fuction
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Main />
      <Footer goToTop={goToTop} />
    </div>
  );
}


export default App;

