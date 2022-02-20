import React from 'react';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import mockData from '../mockData';


describe('<NumberOfEvents /> Component',()=>{
    let AppWrapper, NumberOfEventsWrapper;
    beforeAll(()=>{
        AppWrapper = shallow(<App />);
        NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} eventCount={AppWrapper.state('eventCount')}  updateEvents={()=>{}} />);
    });

    test('default input is 32 after input renders', ()=>{
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
    });

    test('change state when input changes',()=>{
        const mountApp = mount(<App />);
        const input = 10;
        NumberOfEventsWrapper.find('.number').simulate('change', { target: { value: input }});
        mountApp.instance().updateEvents({eventCount: input});
        expect(mountApp.state('eventCount')).toBe(input);
    });
});