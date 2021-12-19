import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import UltimaColeccionPage from './pages/ultima-coleccion/ultima-coleccion.page';

import Header from './components/header/header.component';

import UnderConstruct from './pages/under-construct/under-construct-page';

import apiCall from './components/api/api.component.jsx'


const App = () => {

  const [cuadros, setCuadros] = useState([])

//CALLING THE API TO GET THE PAINTINGS
  useEffect(() => {
    const fetchData = async() => {
      await apiCall.getData()
      .then(
        res => setCuadros(res.data)
      )
      .catch((err) => {
        console.log(err)
      })
    }
    fetchData()
    console.log(cuadros)
  }, [])


    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/jose-marcha' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/ultimaColeccion' component={UltimaColeccionPage} />
          <Route exact path='/underConstruct' component={() => <UnderConstruct cuadros={cuadros} />} />
        </Switch>
      </div>
    );
  
  
}



export default App;