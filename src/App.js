import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import UltimaColeccionPage from './pages/ultima-coleccion/ultima-coleccion.page';

import Header from './components/header/header.component';

import UnderConstruct from './pages/under-construct/under-construct-page';


class App extends React.Component {


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
        </Switch>
      </div>
    );
  }
  
}



export default App;