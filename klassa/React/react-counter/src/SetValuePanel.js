import React, {Component} from 'react';
//  zdarzenie onClick działa jako funkcja, dla tego piszć trzeba: onClick={()=>console.log('klikam')}
/* const SetValuePanel = (props) => {
    let objInput = null;
    console.log(objInput);
    console.log(props);
    return (<div className="set-value-panel">
        
        <input type="number" ref={input => objInput  =  input} />
        <button onClick = {()=>{props.newCounterValue(parseInt(objInput.value))}}>Nowa Wartość</button>
        
    </div>);
    
} */
class SetValuePanel extends Component {
setNewValue = ()=>{
    this.props.newCounterValue(parseInt(this.objInput.value))
}

    render(){
        return(<div className="set-value-panel">
        
        <input type="number" ref={input => this.objInput  =  input} />
        <button onClick = {()=>{this.setNewValue()}}>Nowa Wartość</button>
        
    </div>)
    }
}

export default SetValuePanel;