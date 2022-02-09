import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from '../CitySearch';
import mockData from '../mockData';
import { extractLocations } from '../api';

describe('<NumberOfEvents /> Component',()=>{
    let NumberOfEventsWrapper, CitySearchWrapper;
    beforeAll(()=>{
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        CitySearchWrapper = shallow(<CitySearch />);
    });

    test('render NumberOfEvents component if a city is selected',()=>{
        expect(CitySearchWrapper.find(NumberOfEvents)).toHaveLength(0);
        CitySearchWrapper.setState({
            query: 'Berlin'
        });
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

    test('default input is 32 after input renders',()=>{
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
    });

    test('change state when input changes',()=>{
        const input = 10;
        const eventObject = { target: { value: input }};
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('eventNum')).toBe(input);
    });

    test('filter number of events shown by input value', ()=>{
        
    })

});