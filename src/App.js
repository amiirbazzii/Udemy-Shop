import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

const HatPage = () => (
  <div>
    <h1>HatPage</h1>
  </div>
)
function App() {
  return (
    <div>
     <Route exact path='/' component={Home} />
     <Route path='/hats' component={HatPage} />
    </div>
  );
}

export default App;
