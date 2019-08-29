import React from 'react';
import './PassParamToComponent.css'

export default param => {

  const inputClasses = ['input'];

  if (param.name !== ''){
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }
  
  if (param.name.length > 4){
    inputClasses.push('bold');
  }

  return (
    <div className="PassParamToComponent">
      <h3>Car name: {param.name}</h3>
      <p>Year: <strong>{param.year}</strong></p>
      <input
        type="text"
        onChange = {param.onChangeName}
        defaultValue={param.name}
        className = {inputClasses.join(' ')}
      />
      <button onClick={param.onDelete}>Delete</button>
    </div>
  )
}