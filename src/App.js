import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Cursor from "./components/Cursor";
import CTASection from "./components/CTASection.js";
import Footer from "./components/Footer";
import Project1 from "./components/pages/Project1";
import Project2 from "./components/pages/Project2";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Cursor />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project1" component={Project1} />
          <Route path="/project2" component={Project2} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <CTASection />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
