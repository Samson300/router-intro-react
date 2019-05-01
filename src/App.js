import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';

import {Link, Route} from 'react-router-dom';










class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this._incrementCount = this._incrementCount.bind(this);
  }

  componentDidMount() {
    // this._incrementCount.call(this, 5);
    // this._incrementCount.apply(this, [5]);
  } 

  render() {
  return (
    <div className="App">
      <h1>{this.state.counter}</h1>
      <button onClick={this._incrementCountUsingArrow}>increment</button>

      <Link to="/">Home</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/about">About</Link>

      {/* <Home /> */}
      <Route exact path="/" component={Home}/>
      {/* <Cats /> */}
      <Route path="/cats" component={Cats} />
      {/* <About /> */}
      <Route path="/about" component={About}/>
    </div>
  );
}
  // gives error without bind
  _incrementCount(howMuchBy=1) {
    this.setState({
      counter: this.state.counter + howMuchBy
    });
  }

  // Arrow functions apply .bind
  _incrementCountUsingArrow = () => {
    this.setState({
      counter:this.state.counter + 1
    })
  }
}

export default App;
