import React, { Component } from "react";
import { InfoAlert } from './Alert';

class CitySearch extends Component{
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
    }

    handleFocusToggle = (event)=>{
        let showSuggestions = this.state.showSuggestions;
        const suggestions = this.props.locations.sort();
        
        if(showSuggestions === true){
            this.setState({ 
                showSuggestions: false
            });
        }
        else{
            this.setState({ 
                suggestions: suggestions,
                showSuggestions: true
            });

        }
    };

    handelInputChanged = (event) =>{
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location)=>{
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }).sort();
        
        if(suggestions.length === 0){
            this.setState({
                query: value,
                suggestions: suggestions,
                infoText: "We can not find the city you are looking for. Please try another city."
            });
        }
        else {
            this.setState({
                query: value,
                suggestions: suggestions,
                infoText: ''
            });
        }
    };

    handleItemClicked = (suggestion, reset)=>{
        this.setState({
            query: suggestion,
            infoText: ''
        });
        if(reset === true){
            this.props.updateEvents({location: suggestion, eventCount: 32});
        }
        else{
            this.props.updateEvents({location: suggestion});
        }
    };

    render(){
        return (
            <>
                <div className="CitySearch">
                    <InfoAlert text={this.state.infoText} className={'Alert-info'} />
                    <h3>Choose your nearest city</h3>
                    <input id="city" className="city" type="text" placeholder="Search City" value={this.state.query} 
                        onFocus={this.handleFocusToggle} 
                        onBlur={this.handleFocusToggle} 
                        onChange={this.handelInputChanged} 
                    />
                    <ul id="suggestions" className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }} >
                        {this.state.suggestions.map((suggestion)=>(
                            <li key={suggestion} onMouseDown={()=>this.handleItemClicked(suggestion)}>{suggestion}</li>
                        ))}
                        <li onMouseDown={()=>this.handleItemClicked('')} key='all-cities'>
                            <b>see all cities</b>
                        </li>
                    </ul>
                </div>
                <button id="clearCity" className="reset-btn" onClick={()=>this.handleItemClicked('', true)}>Reset</button>
            </>
        );
    };
}

export default CitySearch;