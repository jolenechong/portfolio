import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Resume from './pages/resume';
// import Resume from './pages/resume';
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      <Footer/>
    </Router>
      </>
  );
}

export default App;
