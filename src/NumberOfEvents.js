import React, { Component } from "react";
import { ErrorAlert }from './Alert';

class NumberOfEvents extends Component {    
    state={
        errorText: ''
    }

    handleInputChange = (event)=>{
        const newNumber = event.target.value;
        if(newNumber > 32 || newNumber < 1){
            this.props.updateEvents({eventCount: newNumber});
            this.setState({errorText: 'Select a number between 1 to 32'});
        }
        else {
            this.props.updateEvents({eventCount: newNumber});
            this.setState({errorText: ''});

        }
    }
    
    render(){
        return (
            <div className="NumberOfEvents">
                <h4>Number of Events:</h4>
                <input id="eventNumber" className="number" type='number' value={this.props.eventCount} onChange={this.handleInputChange} />
                <ErrorAlert text={this.state.errorText} className={'Alert-error'} />
            </div>
        )
    }
}

export default NumberOfEvents;