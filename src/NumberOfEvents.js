import React, { Component } from "react";


class NumberOfEvents extends Component {    

    handleInputChange = (event)=>{
        const newNumber = event.target.value;
        this.props.updateEvents({eventCount: newNumber});
    }
    
    render(){
        return (
            <div className="NumberOfEvents">
                <h4>Number of Events:</h4>
                <input id="eventNumber" className="number" type='number' value={this.props.eventCount} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default NumberOfEvents;