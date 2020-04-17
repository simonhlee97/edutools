import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.js'
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component';
import './App.css';


function App() {
    return (
      <div className="App">
      	<Header />
      	<Switch>
      		<Route exact path='/' component={HomePage} />
        	<Route path='/shop' component={ShopPage} />
        	<Route path='/signin' component={SignInAndUpPage} />

      	</Switch>
      </div>
    )
}

export default App
