import React from 'react';
import './../PassParamToComponent/PassParamToComponent'

class Fragments extends React.Component{

  // componentWillReceiveProps(nextProps){
  //   console.log('PassParamToComponent componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('PassParamToComponent shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  // componentWillUpdate(nextProps, nextState){
  //   console.log('PassParamToComponent componentWillUpdate', nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log('PassParamToComponent getDerivedStateFromProps', nextProps, prevState);

  //   return prevState;
  // }

  componentDidUpdate(){
    console.log('PassParamToComponent componentDidUpdate');
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapShot');
    return true;
  }

  componentWillUnmount() {
    console.log('PassParamToComponent componentWillUnmount');
  }

  render(){
    console.log('PassParamToComponent render');

    // if(Math.random() > 0.7){
    //   throw new Error('This is an error')
    // }
    const inputClasses = ['input'];

    if (this.props.name !== ''){
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }
    
    if (this.props.name.length > 4){
      inputClasses.push('bold');
    }
  
    return (
      <div className="PassParamToComponent">
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange = {this.props.onChangeName}
          defaultValue={this.props.name}
          className = {inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Fragments