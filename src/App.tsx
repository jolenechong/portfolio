import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Nav from './components/nav';
import Home from './pages/home';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;