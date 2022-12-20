import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
 
  return (
    <>
    <Router>
    <Navbar title="TextUtils" key={new Date()} />
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces"/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;