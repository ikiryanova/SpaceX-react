import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Details from './components/Details';

import './css/style.css';

function App() {
  return (
    <>
      <Header />
      <Main/>
      <Features/>
      <Footer/>
      {/* <Calendar/> */}
      {/* <Details/> */}
    </>
  );
}

export default App;
