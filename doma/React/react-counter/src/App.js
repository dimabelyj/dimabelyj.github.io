import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';

class App extends Component {


  render() {
      return ( 
          <div className = "App-main" >
          <Heading headingText="My React Counter"/>
          <Counter initValue = {15} />
          </div>
      );
  }
}

export default App;
