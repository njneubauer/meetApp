import React, { Component } from "react";


class NumberOfEvents extends Component {
     state = {
         eventNum: 32
     }    

    handleInputChange = (event)=>{
        const value = event.target.value;
        this.setState({
            eventNum: value
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