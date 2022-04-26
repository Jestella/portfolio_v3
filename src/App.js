import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home/Home.component';
import FixedItem from './components/FixedItem/FixedItem.component';
import About from './pages/About/About.component';
import Portfolio from './pages/Portfolio/Portfolio.component';
import Devlog from './pages/Devlog/Devlog.component';
import Lab from './pages/Lab/Lab.component';
import ErrorPage from './components/ErrorPage/ErrorPage.component';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/devlog' element={<Devlog />} />
        <Route exact path='/lab' element={<Lab />} />
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      <FixedItem />
    </BrowserRouter>
  );
};

export default App;
