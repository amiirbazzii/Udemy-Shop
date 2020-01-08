import React from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import Home from './pages/home/Home';
import ShopPage from './pages/shop/Shop';
import RegisterForm from './pages/registration-form/RegisterForm';
import CheckOutPage from './pages/checkout/Checkout';

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from './redux/user/action';
import Header from './components/header/Header';
import { createUserProfileDocument , auth } from './firebase/FireBase-utlis';

import './App.css';

class App extends React.Component {

  unsubscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
            })
        } )
      }
      setCurrentUser(userAuth);
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<RegisterForm/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector => ({
  currentUser : selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch (setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
