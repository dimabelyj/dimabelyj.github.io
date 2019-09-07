import React from 'react';
import './../PassParamToComponent/PassParamToComponent'
import withClass from './withClass';

class HighOrderComponent extends React.Component {

    render() {

        const inputClasses = ['input'];

        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        return (
            // после создания withClass можем избавиться от див в пользу <React.Fragment/>
            <React.Fragment>
                {/* <div className="PassParamToComponent"> */}
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    defaultValue={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
                {/* </div> */}
            </React.Fragment>
        )
    }
}

export default withClass(HighOrderComponent, 'PassParamToComponent')