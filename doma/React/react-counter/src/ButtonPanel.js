import React from 'react';
const ButtonPanel = (props) => {
    console.log(props);
    return (<div className="button-panel">
        
        <button onClick={props.changeCounterValue}>ADD </button>
        <button onClick={props.clearCounter}>ZERO</button>
        <button onClick={props.resetCounter}>RESET</button>
    </div>);
    
}

export default ButtonPanel;