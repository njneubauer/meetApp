import React, { Component } from "react";

class CitySearch extends Component{
    state = {
        query: '',
        suggestions: [],
        itemSelected: false
    }

    showSuggestionList(bool){
        const suggestionsElement = document.getElementById("suggestions");
        if(bool === true){
            suggestionsElement.classList.add('showSuggestions');
            suggestionsElement.classList.remove('display-none');  
        }
        else{
            suggestionsElement.classList.remove('showSuggestions');
            suggestionsElement.classList.add('display-none');
        }   
    }

    handleFocus(event){
        // this.showSuggestionList(false);
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
        // this.showSuggestionList(true);
    }

    handleItemClicked = (suggestion)=>{
        this.setState({
            query: suggestion,
            itemSelected: true
        });
        this.props.updateEvents({location: suggestion});
        // this.showSuggestionList(false);
    }

    render(){
        return (
            <div className="CitySearch">
                <h3>Choose your nearest city</h3>
                <input className="city" type="text" placeholder="Search City" value={this.state.query} 
                    onClick={this.handelInputChanged} 
                    onBlur={(event)=>this.handleFocus(event)} 
                    onChange={this.handelInputChanged} 
                />
                
                <ul id="suggestions" className={this.state.query ? "suggestions showSuggestions" : "suggestions display-none" }>
                    {this.state.suggestions.map((suggestion)=>(
                        <li key={suggestion} onMouseDown={()=>this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li onMouseDown={()=>this.handleItemClicked('all')} key='all'>
                        <b>see all cities</b>
                    </li>
                </ul>
            </div>
        );
    };
}

export default CitySearch;