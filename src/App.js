import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import RegisterForm from './pages/registration-form/RegisterForm';
import { auth } from './firebase/FireBase-utlis';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user });
      console.log(user);
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={RegisterForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
