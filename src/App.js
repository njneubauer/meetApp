import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    location: undefined,
    eventCount: 32
  }

  componentDidMount(){
    this.mounted = true;
    getEvents().then((events)=>{
      if (this.mounted){
        this.setState({events: events.slice(0, this.state.eventCount), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = ({location, eventCount}) => {
    if(location !== undefined){
      this.setState({
        location: location
      });
    }

    if(eventCount !== undefined){
      this.setState({
        eventCount: eventCount
      });
    }

    getEvents().then((events) => {
      const locationEvents = (this.state.location === 'all') ?
      events.slice(0, this.state.eventCount) :
      events.filter((event)=>event.location === this.state.location).slice(0, this.state.eventCount);
      
      this.setState({
        events: locationEvents
      });
    });
  }

  render(){
    const { events, locations, eventCount } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
          <div className='search-wrapper'>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
            <NumberOfEvents updateEvents={this.updateEvents} />
          </div>
          <EventList events={events} />
      </div>
    );
  }
}

export default App;
