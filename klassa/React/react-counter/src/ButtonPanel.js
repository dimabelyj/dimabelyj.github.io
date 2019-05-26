import React from 'react';
//  zdarzenie onClick działa jako funkcja, dla tego piszć trzeba: onClick={()=>console.log('klikam')}
const ButtonPanel = (props) => {
    console.log(props);
    return (<div className="button-panel">
        
        <button onClick={props.changeCounterValue}>Dodaj 1</button>
        <button onClick={props.clearCounter}>ZERO</button>
        <button onClick={props.resetCounter}>RESET</button>
    </div>);
    
}

export default ButtonPanel;