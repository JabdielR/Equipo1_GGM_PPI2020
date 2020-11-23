import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Envio from './components/pages/Envio/Envio';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Registrate from './components/pages/Registrate/Registrate';
import Acceder from './components/pages/Acceder/Acceder';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/envio' component={Envio} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/registrate' component={Registrate} />
        <Route path='/acceder' component={Acceder} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
