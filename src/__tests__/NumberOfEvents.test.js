import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from '../CitySearch';
import mockData from '../mockData';

describe('<NumberOfEvents /> Component',()=>{
    let NumberOfEventsWrapper;
    beforeAll(()=>{
        NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
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
});