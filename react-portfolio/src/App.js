import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavComponent";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from './components/Projects';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
