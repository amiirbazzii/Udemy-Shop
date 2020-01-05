import React from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/action';
import './App.css';
import Home from './pages/home/Home';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import RegisterForm from './pages/registration-form/RegisterForm';
import { createUserProfileDocument , auth } from './firebase/FireBase-utlis';

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
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<RegisterForm/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch (setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
