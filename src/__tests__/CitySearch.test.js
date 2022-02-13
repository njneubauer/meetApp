import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import mockData from '../mockData';
import { extractLocations } from '../api';

describe('<CitySearch /> component',()=>{
    let locations, CitySearchWrapper;
    
    beforeAll(()=>{
        // Initialize citySearchWrapper & pass in props
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={()=>{}} />);
    });

    test('render text input',()=>{
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });
    
    test('change state when input changes',()=>{
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        let input = 'Berlin';
        const eventObject = { target: { value: input }};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe(input);
    });

    test('render list of suggestions correctly',()=>{
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i += 1){
            expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
        }
    });

    test('suggestion list match the query when changed', ()=>{
        // initialize state
        CitySearchWrapper.setState({ query: '', suggestions: []});
        // simulate input
        CitySearchWrapper.find('.city').simulate('change', {
            target: { value: 'Berlin' },
        });
        const query = CitySearchWrapper.state('query');
        // filter locations based on input
        const filteredLocations = locations.filter((location)=>{
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        // check that suggestions state ===  filtered locations
        expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
    });

    test('selecting a suggestion should change query state', ()=>{
        // initialize state
        CitySearchWrapper.setState({ query: '', suggestions: []});
        // simulate input
        CitySearchWrapper.find('.city').simulate('change', {
            target: { value: 'berlin' },
        });
        const suggestions = CitySearchWrapper.state('suggestions');
        // select a city
        CitySearchWrapper.find('.suggestions li').at(0).props().onMouseDown();
        // check that query state === selected city
        expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
    });

    test('selecting CitySearch input reveals the suggestions list',()=>{
        // initialize showSuggestions to default state
        CitySearchWrapper.setState({ showSuggestions: undefined });
        // simulate input recieving focus
        CitySearchWrapper.instance().handleFocusToggle();
        // check that showSuggestions state === true
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        // check that suggestions are displayed
        expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' });
    });

    test("selecting a suggestion should hide the suggestions list", () => {
        // initialize state
        CitySearchWrapper.setState({
          query: '',
          suggestions: [],
          showSuggestions: undefined
        });
        // enter value into input which togglesFocus
        CitySearchWrapper.find('.city').simulate('change', {
            target: { value: 'Berlin' },
        });
        // simulate onMouseDown event on the first item in suggestions list
        CitySearchWrapper.find('.suggestions li').at(0).props().onMouseDown();
        // simulate input losing focus which triggers handleFocusToggle()
        CitySearchWrapper.find('.city').props().onBlur();
        // check that suggestions state is false
        expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
        // check that suggestions list is not displayed
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
      });
});