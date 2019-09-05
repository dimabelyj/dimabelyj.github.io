import React, { Component } from 'react';
import './App.css';
import PassParamToComponent from './PassParamToComponent/PassParamToComponent';

class App extends Component {

  constructor(props) {
    console.log('App constructor');
    super(props)

    this.state ={
      cars: [
        { name: 'Ford', year: 2018 },
        // { name: 'Audi', year: 2016 },
        // { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React component through "state"',
      showCars: false
    }
  }


  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);
    this.setState({ cars });
  }

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

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }



  render() {
    console.log('App render');
    const divStyle = {
      'textAlign': 'center'
    };

    return (
      <div style={divStyle}>
        {/* <h1 style={{ backgroundColor: 'green', color: 'blue' }}>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        {/* <input type="text" onChange={this.changeInput} /> */}
        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '20px'
              }}>
                <PassParamToComponent
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                  onChangeName={event => this.onChangeName(event.target.value, index)}
                  onDelete={this.deleteHandler.bind(this, index)}
                />
              </div>
            )
          })
          : null
        }
      </div>
    );
  }
}

export default App;
