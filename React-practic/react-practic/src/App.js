import React, { Component } from 'react';
import './App.css';
// import Car from './Exit-data/Car';
// import DynamicData from './DynamicData/DynamicData';
import PassingParameters from './PassingParameters/PassingParameters';

class App extends Component {
  render() {
    const divStyle = {
     'textAlign': 'center' 
    };

    return (
      <div style = {divStyle}>
        <h1 style = {{backgroundColor: 'green', color: 'blue'}}>Hello world</h1>
        {/* <Car />  */}
        {/* Если вывести два раза, то и блоков будет два, но выводимые числа от Math.random() Будут разными !!!Сложные конструкции не использкются */}
        {/* <DynamicData />
        <DynamicData /> */}

        {/* Передаем данные задавая атрибуты. Если хотим передать просто строчку, то пишем даннае в "" если хотим обьект, ьл пишем в {} */}
        <PassingParameters name={'Ford'} year = {2018}/>
        <PassingParameters name = "Audi" year = {2016}/>
        <PassingParameters name={'Mazda'} year = {2010}/>
        {/* передача контента внутрь тега */}
        <PassingParameters name={'BMW'} year = {2011}>
          <p style = {{color: 'red'}}>COLOR</p>
        </PassingParameters>  
      </div>
    );

    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App'
    //   },
    //   React.createElement(
    //   'h1',
    //   {
    //     className: 'rty'
    //   },
    //   'hello world!'
    //   )
    // );
  }

}

export default App;
