import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import RegisterForm from './pages/registration-form/RegisterForm'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={RegisterForm}/>
      </Switch>
    </div>
  );
}

export default App;
