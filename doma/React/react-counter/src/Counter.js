import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';
import NewSetValuePanel from './NewSetValuePanel';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            step: 1
        }
    };
   
       changeValue = () =>{
           console.log('wywołanie metody changeValue');
           this.setState((prevValue)=> {
               return({
                   counterValue: prevValue.counterValue + this.state.step
               });
           });
       }
       clearValue = () =>{
           this.setState(({counterValue: 0}));
       }
       resetValue = () =>{
          this.setState(({counterValue: this.props.initValue}))
       }
       newCounter = (newValue) => {
           this.setState(({counterValue: newValue}))
       } 
       stepCounter = (newObjInput) => {
           console.log('dziala stepValue');
           this.setState({step: newObjInput })
       }
   
   
       render() {
           console.log(this);
           return ( 
               <div className = "App" >
                  <span class = "text">Counter: </span><span class = "text-result">{this.state.counterValue} </span>  
                   <ButtonPanel changeCounterValue={this.changeValue} clearCounter = {this.clearValue} resetCounter = {this.resetValue} />
                   <SetValuePanel newCounterValue={this.newCounter}/> 
                   <NewSetValuePanel newStepCounter = {this.stepCounter}/>
               </div>
   
                
           );
       }
   }
   
   export default Counter;