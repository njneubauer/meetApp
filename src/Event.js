import React, { Component } from "react";

class Event extends Component {
    state = {
        showDetails: false
    };

    handleClick(){
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    render(){
        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <div className="Event">
                <h1 className="title">{ event.summary }</h1>
                <p className="start-time">{ event.start.dateTime }</p>
                <p className="summary-location">@{ event.summary } | {event.location}</p>
                <button className={showDetails ? "details-btn-hide":"details-btn-show"} onClick={()=>this.handleClick()}>{showDetails ? "hide details" : "show details"}</button>                  
                     {showDetails && 
                        <div className="details">
                            <h3 className="header">About Event:</h3>
                            <h3 className="link"><a href={event.htmlLink}>See details on Google Calendar</a></h3>
                            <p className="description">{ event.description }</p>
                        </div>
                    }
            </div>
        )
    }
}

export default Event;
