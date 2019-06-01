import React, {Component} from 'react';
import './App.css';
import Heading from './Heading';
import Users from './Users';

class App extends Component {


  render() {
      return ( 
          <div className = "App" >
          <Heading headingText="User's List"/>
          <Users />
          </div>
      );
  }
}

export default App;
