import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';
import Header from './Header';

import {Link, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/cats">Cats</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="knowhere">This goes nowhere</Link>

      

      {/* Switch shows the first matching Route or the last Route listed */}
        <Switch>
      {/* <Home /> */}
          <Route exact path="/" component={Home}/>
      {/* <Cats /> */}
          <Route path="/cats" component={Cats} />
      {/* <About /> */}
          <Route path="/about" component={About}/>

          <Redirect to="" />

          <Route component={PageNotFound} />

        </Switch>
    </div>
  );
}

export default App;
