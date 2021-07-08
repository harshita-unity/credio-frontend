import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Component/Pages/Home';
import HeroSection from './Component/HeroSection';
import CardItems from './Component/CardItems';
import Cards from './Component/Cards';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>

    <Router>
      <HeroSection />
      <Switch>
        <Route path='/home' exact />
      </Switch>
    </Router>

    
   

    <Router>
      <CardItems />
      <Switch>
        <Route path='/card-item' exact />
      </Switch>
    </Router>

    
    <Router>
      <Cards />
      <Switch>
        <Route path='/cards' exact />
      </Switch>
    </Router>
   </>
  );
}

export default App;
