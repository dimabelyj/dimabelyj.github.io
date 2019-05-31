import React from 'react';
const SetValuePanel = (props) => {
    let objInput = null;
    console.log(objInput);
    console.log(props);
    return (<div className="set-value-panel">
        
        <input type="number" ref={input => objInput  =  input} />
        <button onClick = {()=>{props.newCounterValue(parseInt(objInput.value))}}>New Value Of Counter</button>
        
    </div>);
    
}


export default SetValuePanel;