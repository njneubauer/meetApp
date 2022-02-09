import React, { Component } from "react";


class NumberOfEvents extends Component {
     state = {
         eventNum: 32
     }    

    handleInputChange = (event)=>{
        const newNumber = event.target.value;
        this.setState({
            eventNum: newNumber
        });
    }
    
    render(){
        return (
            <div className="NumberOfEvents">
                <input className="number" type='text' value={this.state.eventNum} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default NumberOfEvents;