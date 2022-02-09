import React, { Component } from "react";
import { extractLocations } from './api';
import NumberOfEvents from "./NumberOfEvents";

class CitySearch extends Component{
    state = {
        query: '',
        suggestions: [],
        itemSelected: false
    }

    handelInputChanged = (event) =>{
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location)=>{
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
        this.setState({
            query: value,
            suggestions,
            itemSelected: false
        });
    }

    handleItemClicked = (suggestion)=>{
        this.setState({
            query: suggestion,
            itemSelected: true
        });
    }

    render(){
        return (
            <div className="CitySearch">
                <input className="city" type='text' value={this.state.query} onChange={this.handelInputChanged} />
                <ul className="suggestions">
                    {this.state.suggestions.map((suggestion)=>(
                        <li key={suggestion} onClick={()=>this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li key='all'>
                        <b>see all cities</b>
                    </li>
                </ul>
                {this.state.query && <NumberOfEvents  />}
            </div>
        );
    };
}

export default CitySearch;