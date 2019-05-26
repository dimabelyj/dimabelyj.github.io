import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';
// import ButtonPanel from './ButtonPanel';

class App extends Component {


    render() {
        return ( 
            <div className = "App" >
            <Heading headingText="React Counter1"/>
            <Counter initValue={33}/>
            <Heading headingText="React Counter2"/>
            <Counter initValue={105}/>
            </div>
        );
    }
}

export default App;