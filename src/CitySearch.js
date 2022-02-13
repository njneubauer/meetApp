import React, { Component } from "react";

class CitySearch extends Component{
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleFocusToggle = (event)=>{
        let showSuggestions = this.state.showSuggestions;
        if(showSuggestions === true){
            this.setState({ 
                showSuggestions: false
            });
        }
        else{
            this.setState({ 
                suggestions: this.props.locations,
                showSuggestions: true
            });

        }
    }

    handelInputChanged = (event) =>{
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location)=>{
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
        this.setState({
            query: value,
            suggestions,
            showSuggestions: true
        });
    }

    handleItemClicked = (suggestion)=>{
        this.setState({
            query: suggestion,
        });
        this.props.updateEvents({location: suggestion});
    }

    render(){
        return (
            <>
            <div className="CitySearch">
                <h3>Choose your nearest city</h3>
                <input id="city" className="city" type="text" placeholder="Search City" value={this.state.query} 
                    onFocus={this.handleFocusToggle} 
                    onBlur={this.handleFocusToggle} 
                    onChange={this.handelInputChanged} 
                />
                <ul id="suggestions" className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }} >
                    {this.state.suggestions.map((suggestion)=>(
                        <li key={suggestion} onMouseDown={()=>this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li onMouseDown={()=>this.handleItemClicked('')} key='all-cities'>
                        <b>see all cities</b>
                    </li>
                </ul>
            </div>
            <button id="clearCity" className="reset-btn" onClick={()=>this.handleItemClicked('')}>Reset City</button>
            </>
        );
    };
}

export default CitySearch;