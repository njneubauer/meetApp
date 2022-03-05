import React, { Component } from "react";
import { ErrorAlert }from './Alert';

class NumberOfEvents extends Component {    
    state={
        errorText: ''
    }
    
    handleInputChange = (event)=>{
        console.log(this.props.maxNumEvents);
        const newNumber = event.target.value;
        if(newNumber < 1 || newNumber > this.props.maxNumEvents){
            this.setState({errorText: `Select a number between 1 to ${this.props.maxNumEvents}`});
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