import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portofolio from './pages/Portofolio';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    
      <Header />
      <Route exact path="/" component={Portofolio} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/contact" component={ContactMe} />
      <Footer />
      
    </Router>
  );
}

export default App;
