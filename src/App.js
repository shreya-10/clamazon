import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut'
import Login from './Login'
import Payment from './Payment'
import Footer from './Footer'
import Order from './Order'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { auth } from './firebase';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"
import { useStateValue } from './StateProvider';

const promise=loadStripe("pk_test_51HRzP3EdGft4PwLqyPe1pb4t3pHYpt0VwuzTqlslZfEtYFObidMsldQJSCXOxfMTBAD0neBPyX0ExyVwZZR8dvg500xBXWUamj");

function App() {
  useEffect(() => {
    document.title = "Clamazon"
  }, [])
  const[{basket},dispatch]=useStateValue();
  useEffect(() => {
   auth.onAuthStateChanged(authUser=> {
     console.log(authUser);
     if(authUser)
     {
        //user just logged in/was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
     else{
       //the user logged out
      dispatch({
        type:'SET_USER',
        user:null 
      })
     }
   })
  }, [])
  return (
    
    <Router>
    <div className="app">
   
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
    <Route path="/checkout">
       <Header/>
      <CheckOut/>
    
      </Route>
      <Route path="/payment">
        <Header/>
       <Elements stripe={promise}>
        <Payment/>
        </Elements>
      </Route>
      <Route path="/order">
        <Header/>
        <Order/>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      <Footer/>
      </Route>


    </Switch>
  
    </div>
    </Router>
  );
}

export default App;
