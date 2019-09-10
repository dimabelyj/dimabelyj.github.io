import React, { Component } from 'react';
import './App.css';
// import PassParamToComponent from './PassParamToComponent/PassParamToComponent';
import ErrorBondary from './ErrorBondary/ErrorBondary';
// import Fragments from './Fragments/Fragments'
import CounterForFragments from './CounterForFragments/CounterForFragments';
import HighOrderComponent from './HighOrderComponent/HighOrderComponent';

export const ClickedContext = React.createContext(false);
class App extends Component {

  constructor(props) {
    console.log('App constructor');
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: '2016' },
        { name: 'Mazda', year: 2010 }
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

  // componentWillMount() {
  //   console.log('App componentWillMount');
  // }

  componentDidMount() {
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
        <ClickedContext.Provider value = {this.state.clicked}>
          <CounterForFragments />
        </ClickedContext.Provider>
        <hr />
        {/* <input type="text" onChange={this.changeInput} /> */}
        <button
          style={{ marginTop: 20 }}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button> <br />
        <button onClick={() => this.setState({ clicked: true })}>Change clicked</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <ErrorBondary key={index}>
                <div style={{
                  width: 400,
                  margin: 'auto',
                  paddingTop: '20px'
                }}>
                  <HighOrderComponent
                    name={car.name}
                    year={car.year}
                    index={index}
                    onChangeTitle={() => this.changeTitleHandler(car.name)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                    onDelete={this.deleteHandler.bind(this, index)}
                  />
                </div>
              </ErrorBondary>
            )
          })
          : null
        }
      </div>
    );
  }
}

export default App;
