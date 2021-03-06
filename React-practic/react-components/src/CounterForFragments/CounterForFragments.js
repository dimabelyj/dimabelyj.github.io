 import React, {Component} from 'react';
 import Counter2ForComponent from './../Counter2ForComponent/Counter2ForComponent';


// !!!!!!!Закомментирован весь export default class CounterForFragments extends Component (блочно) Продолжение в самом низу!!!!!
export default class CounterForFragments extends Component{

    state = {
        counter: 0
    }

    addCounter =()=>{
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // !!!правильное использование метода setState с передачей хранящегося предыдущего состояния prevState
        this.setState((prevState) => {
          return {
              counter: prevState.counter + 1
          }
        })
    }

  render(){
    // return (
    //     <div>
    //         <h2>CounterForFragments {this.state.counter}</h2>
    //         <button onClick = {this.addCounter}>+</button>
    //         <button onClick = {() => this.setState({counter: this.state.counter - 1})}>-</button>
    //     </div>
    // )  

    // Тожно вывести без дива значения, если задать их как массив через запятую и в []. При этом необходимо учесть, что нужно задать значение ключа, чтоб они отличелись (выборочно)
 //     return [
 //             <h2 key = {'1'}>CounterForFragments         {this.state.counter}</h2>,
 //             < key = {'2'} onClick = {this.addCounter}>+</ button>,
  //             <button key = {'3'} onClick = {() => this.setState(  {counter: this.state.counter - 1})}>-</button>
 //         ] 
 //   }


  // Еще один способ записать данные без див
    return (
        <React.Fragment>
            <h2>CounterForFragments {this.state.counter}</h2>
            <Counter2ForComponent/>
            <button onClick = {this.addCounter}>+</button>
            <button onClick = {() => this.setState({counter: this.state.counter - 1})}>-</button>
        </React.Fragment>
    )  
  }
}




