import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';
class Counter extends Component {

 constructor(props){
     super(props);
     this.state = {
         counterValue: this.props.initValue
     }
 };


//  piszemy metodę dla prekazywania zwiększenia wartości przy naciskaniu na przycisk

    changeValue = () =>{
        console.log('wywołanie metody changeValue');
        this.setState((prevValue)=> {
            return({
                counterValue: prevValue.counterValue + 1
            });
        });
    }
    clearValue = () =>{
        console.log('dziala Zero');
        this.setState(({counterValue: 0}));
    }
    resetValue = () =>{
       console.log('dziala reset');
       this.setState(({counterValue: this.props.initValue}))
    }
    newCounter = (newValue) => {
        this.setState(({counterValue: newValue}))
        console.log('dziala newValue');
    }


    render() {
        console.log(this);
        return ( 
            <div className = "App" >
                Licznik: {this.state.counterValue} 
                <ButtonPanel changeCounterValue={this.changeValue} clearCounter = {this.clearValue} resetCounter = {this.resetValue} />
                <SetValuePanel newCounterValue={this.newCounter}/>
            </div>

             
        );
    }
}

export default Counter;