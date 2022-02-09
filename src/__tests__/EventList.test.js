import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import mockData from '../mockData';

describe('<EventList /> component', () => {
  let EventListWrapper;

  beforeAll(()=>{
    EventListWrapper = shallow(<EventList events={mockData} />);
  });
  
  test('render ul list for events', ()=>{
    expect(EventListWrapper.find('.EventList')).toHaveLength(1);
  });

  test('render correct number of events', () => {
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

});