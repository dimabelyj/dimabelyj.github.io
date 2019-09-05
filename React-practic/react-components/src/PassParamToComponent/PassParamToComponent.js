import React from 'react';
import './PassParamToComponent.css'

class PassParamToComponent extends React.Component{

  componentWillReceiveProps(nextProps){
    console.log('PassParamToComponent componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('PassParamToComponent shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState){
    console.log('PassParamToComponent componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('PassParamToComponent componentDidUpdate');
  }

  render(){
    console.log('PassParamToComponent render');
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

export default PassParamToComponent