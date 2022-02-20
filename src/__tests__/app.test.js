import React from "react";
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import mockData from '../mockData';
import { extractLocations, getEvents } from '../api';

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
      expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration testing', ()=>{
  let AppWrapper  ;
  
  beforeEach(()=>{
    AppWrapper = mount(<App />);
  });
  
  afterEach(async()=>{
    await AppWrapper.unmount();
  });

  test('App passes state as prop to EventList', async()=>{
      await AppWrapper.update();
      const AppEventsState = AppWrapper.state('events');
      expect(AppEventsState).not.toEqual(undefined);
      expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  });

  test('App passes "locations" state as a prop to CitySearch', async() => {
      await AppWrapper.update();
      const AppLocationsState = AppWrapper.state('locations');
      expect(AppLocationsState).not.toEqual(undefined);
      expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    });

  test('get list of events matching the city selected by the user', async() => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    // select random index
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    // select city by index
    const selectedCity = suggestions[selectedIndex];
    // simulate city selection & get events
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    // filter events by selected city
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    // check to see if events state === filtered events
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
  });

  test('get list of all events when user selects "See all cities"', async () => {
    // find "see all cities" in suggestions list
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    // simulate select "see all cities"
    await suggestionItems.at(suggestionItems.length - 1).props().onMouseDown();
    // call getEvents() and assign to allEvents variable
    const allEvents = await getEvents();
    // check that events state === allEvents variable
    expect(AppWrapper.state('events')).toEqual(allEvents);
  });

  test('Send new eventCount to updateEvents() and update eventCount state in <App>', async()=>{
    const input = 5
    const NumberOfEventsInput = AppWrapper.find(NumberOfEvents).find('.number');
    await NumberOfEventsInput.simulate('change', { target: { value: input }});
    const appEventCountState = AppWrapper.state('eventCount');
    expect(appEventCountState).toEqual(input);
  });

  test('reset locations', async()=>{
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    // select random index
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    // select city by index
    const selectedCity = suggestions[selectedIndex];
    // simulate city selection & get events
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    // selected city === citySearch state "query"
    expect(selectedCity).toEqual(CitySearchWrapper.state('query'));
    // Simulate reset button click
    CitySearchWrapper.find('.reset-btn').props().onClick();
    // check the citySearch state "query" === ''
    expect(CitySearchWrapper.state('query')).toEqual('');
  });
});