import React from 'react';
const NewSetValuePanel = (props) => {
    let newObjInput = null;
    console.log(newObjInput);
    console.log(props);
    return (<div className="new-set-value-panel">
        <h3>STEP:  
        <input type="number" ref={input => newObjInput  =  input} />
        </h3>
        <button onClick = {()=>{props.newStepCounter(parseInt(newObjInput.value))}}>Set Step</button>
        
    </div>);
    
}


export default NewSetValuePanel;