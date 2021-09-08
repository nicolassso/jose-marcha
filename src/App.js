import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UltimaColeccionPage from './pages/ultima-coleccion/ultima-coleccion.page';

import Header from './components/header/header.component';

import  {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';

import UnderConstruct from './pages/under-construct/under-construct-page';


class App extends React.Component {

  
  unsubscribeFromAuth = null;


  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* HEADER GOES OUTSIDE THE SWITCH SO IT IS ALWAYS RENDERED */}
        <Header/>
        <Switch>
          <Route exact path='/jose-marcha' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/ultimaColeccion' component={UltimaColeccionPage} />

          <Route exact path='/underConstruct' component={UnderConstruct} />

          <Route
            exact
            path='/signin' 
            render = {() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : ( 
                <SignInAndSignUpPage /> 
              ) 
            } 
          />

        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

});


export default connect(mapStateToProps, mapDispatchToProps)(App);