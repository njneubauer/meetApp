import React from "react";
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', ()=>{
    let AppWrapper;
    beforeAll(()=>{
        AppWrapper = shallow(<App />);
    });

    test('render list of events', ()=>{
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', ()=>{
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents component if a city is selected', ()=>{
        const CitySearchWrapper = shallow(<CitySearch />);
        expect(CitySearchWrapper.find(NumberOfEvents)).toHaveLength(0);

        CitySearchWrapper.setState({
            query: 'Berlin'
        });
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.find(NumberOfEvents)).toHaveLength(1);
    })
});