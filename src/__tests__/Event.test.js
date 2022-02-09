import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import mockData from '../mockData';

describe('<Event /> component',()=>{
    let EventWrapper, mockEvent;
    
    beforeAll(()=>{
        mockEvent = JSON.parse(JSON.stringify(mockData[0]));
        EventWrapper = shallow(<Event event={mockEvent} />);
    });

    test('render default event details',()=>{
        const title = mockEvent.summary;
        const startTime = mockEvent.start.dateTime;
        const summaryLocation = `@${mockEvent.summary}|${mockEvent.location}`
        expect(EventWrapper.find('.Event')).toHaveLength(1);
        expect(EventWrapper.find('.title').text()).toBe(title);
        expect(EventWrapper.find('.start-time').text()).toBe(startTime);
        expect(EventWrapper.find('.summary-location').text()).toBe(summaryLocation);
        expect(EventWrapper.find('.btn-details').text()).toBe('show details');
    });

    test('default details are hidden',()=>{
        expect(EventWrapper.find('.details')).toHaveLength(0);
    });

    test('show details on click',()=>{
        const htmlLink = mockEvent.htmlLink;
        const description = mockEvent.description;
        // default button should read "show details & details NOT rendered"
        expect(EventWrapper.find('.btn-details').text()).toBe('show details');
        expect(EventWrapper.find('.details')).toHaveLength(0);
        // simulate button click
        const showDetails = EventWrapper.setState({showDetails: true});
        EventWrapper.find('.btn-details').simulate('click', showDetails)
        // After button click--> state changes, button should read hide details & details rendered"
        expect(EventWrapper.find('.btn-details').text()).toBe('hide details');
        expect(EventWrapper.find('.details')).toHaveLength(1);
        expect(EventWrapper.find('.details h3.header').text()).toBe('About Event:');
        expect(EventWrapper.find('.details a').prop('href')).toBe(htmlLink);
        expect(EventWrapper.find('.details p.description').text()).toBe(description);

    });
});