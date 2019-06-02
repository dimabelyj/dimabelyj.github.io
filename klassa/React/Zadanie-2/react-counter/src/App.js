import React, {Component} from 'react';
import Crypto from './Crypto';
import './App.css';



class App extends Component {


  render() {
      return ( 
        <div className="App">
        
          <h1>
           Crypto Rate
          </h1>
        <Crypto />
      </div>
      );
  }
}



export default App;
