import React, { Component } from "react";


class NumberOfEvents extends Component {
     state = {
         eventCount: 32
     }

    handleInputChange = (event)=>{
        const newNumber = event.target.value;
        this.setState({
            eventCount: newNumber
        })
        this.props.updateEvents({eventCount: newNumber});
    }
    
    render(){
        return (
            <div className="NumberOfEvents">
                <h4>Number of Events:</h4>
                <input className="number" type='number' value={this.state.eventCount} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default NumberOfEvents;