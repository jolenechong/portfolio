import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
      <HeroSection></HeroSection>
      <Projects></Projects>
      <Footer></Footer>
    </Router>

    </>
  );
}

export default App;
