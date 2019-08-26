import React, { Component } from 'react';
import './App.css';
// import Car from './Exit-data/Car';
// import DynamicData from './DynamicData/DynamicData';
// import PassingParameters from './PassingParameters/PassingParameters';
// import CreateState from './CreateState/CreateState';
// import Events from './Events/Events';,
import ParamToFunction from './ParamToFunction/ParamToFunction';

class App extends Component {

  // Создаём массив, в котором будут храниться данные (выводимые на экран) с помошью state
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 }
    ],
    pageTitle: 'React component through "state"',
    showCars: false
  }

  // создаем функцию для обработчика событий конструкция для урока Events
  // changeTitleHandler = () => {

  //   const oldTitle = this.state.pageTitle;
  //   const newTitle = oldTitle + ' (changed)';

  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

  // конструкция для урока ParamToFunction
  changeTitleHandler = (newTitle) => {

    this.setState({
      pageTitle: newTitle
    })
  }

  // передвча данных из инпут
  changeInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    const divStyle = {
      'textAlign': 'center'
    };

    // зозжает переменную для удобства обращаться к данным
    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1 style={{ backgroundColor: 'green', color: 'blue' }}>{this.state.pageTitle}</h1>
        {/* <Car />  */}
        {/* Если вывести два раза, то и блоков будет два, но выводимые числа от Math.random() Будут разными !!!Сложные конструкции не использкются */}
        {/* <DynamicData />
        <DynamicData /> */}

        {/* Передаем данные задавая атрибуты. Если хотим передать просто строчку, то пишем даннае в "" если хотим обьект, ьл пишем в {}
        <PassingParameters name={'Ford'} year = {2018}/>
        <PassingParameters name = "Audi" year = {2016}/>
        <PassingParameters name={'Mazda'} year = {2010}/>
        {/* передача контента внутрь тега */}
        {/* <PassingParameters name={'BMW'} year = {2011}> */}
        {/* <p style = {{color: 'red'}}>COLOR</p> */}
        {/* </PassingParameters>  */}

        {/* с помошюю зоданной переменной вызываем тк параметры, котороые нужны */}
        {/* <CreateState name={cars[0].name} year = {cars[0].year}/>
        <CreateState name={cars[1].name} year = {cars[1].year}/>
        <CreateState name={cars[2].name} year = {cars[2].year}/> */}

        {/* События создаются так же при помощи тегов */}
        {/* <button onClick = {this.changeTitleHandler}>Cange title</button>
        <Events name={cars[0].name} year = {cars[0].year}/>
        <Events name={cars[1].name} year = {cars[1].year}/>
        <Events name={cars[2].name} year = {cars[2].year}/> */}

        {/* Передаём параметр при помощи метода bind */}

        {/* Передача данных из инпута */}

        <input type="text" onChange={this.changeInput} />

        {/* <button 
        onClick={this.changeTitleHandler.bind(this, 'Changed!!!')}
        >Cange title</button> */}

        {/* Для урока Работа с условными операторами */}
        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        {/* для урока  с инпутом и передачи параметров*/}
        {/* <ParamToFunction
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle = {this.changeTitleHandler.bind(this, cars[0].name)}
          />
        <ParamToFunction
          name={cars[1].name}
          year={cars[1].year} 
          onChangeTitle = {() => this.changeTitleHandler(cars[1].name)}
          />
        <ParamToFunction
          name={cars[2].name}
          year={cars[2].year} 
          onChangeTitle = {() => this.changeTitleHandler(cars[2].name)}
          /> */}

        {/*!!!!! Работа со списком (чтоб бесконечно не вводить теги вручную) !!!!!*/}

        {/* {this.state.cars.map((car, index) => {
          return (
          <ParamToFunction 
            key = {index}
            name = {car.name}
            year = {car.year}
            onChangeTitle = {() => this.changeTitleHandler(car.name)}
          />
          )
        })} */}

        {/* Работа с условными операторами */}
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <ParamToFunction
                key={index}
                name={car.name}
                year={car.year}
                onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
            )
          }) 
          : null
        }
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
