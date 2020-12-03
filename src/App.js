import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import About from './components/About'
import Buy from './components/Buy';
import Contact from './components/Contact'
import Sell from './components/Sell'
import MyAccount from './components/My Account/myAccount'
import Register from './components/Register';
import Book_Home from './components/Book_home';
import Landing from './components/Layout/Landing';

import Pnf from './components/pnf';
import './App.css';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/buy' component={Buy}/>
            <Route exact path='/sell' component={Sell}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/myaccount' component={MyAccount}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/book-home' component={Book_Home}/>

            <Route component={Pnf}/>
          </Switch>
          

        <Footer/>

      </div>

    </Router>
  );
}

export default App;
