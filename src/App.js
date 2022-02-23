import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import { getEvents, extractLocations } from './api';

class App extends Component {
  constructor(props){
    window.addEventListener('online', ()=>{
      this.setState({ offlineWarning: '' });
    });

    window.addEventListener('offline', ()=>{
      this.setState({ offlineWarning: 'No internet connection detected. Events loaded from cache and may not be up-to-date.' });
    });
    
    super(props);
      this.state = {
        events: [],
        locations: [],
        location: '',
        eventCount: 32,
      }
    }
  
  componentDidMount(){
    this.mounted = true;
    this.checkOnlineStatus();
    getEvents().then((events)=>{
      if (this.mounted){
        this.setState({events: events.slice(0, this.state.eventCount), locations: extractLocations(events) });
      }
    });
  }

  checkOnlineStatus(){
    if(!navigator.onLine){
      this.setState({ offlineWarning: 'No internet connection detected. Events loaded from cache and may not be up-to-date.' });
    }
    else{
      this.setState({ offlineWarning: '' });
    }
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
      const locationEvents = (this.state.location === '') ?
      events.slice(0, this.state.eventCount) :
      events.filter((event)=>event.location === this.state.location).slice(0, this.state.eventCount);
      
      this.setState({
        events: locationEvents
      });
    });
  }

  render(){
    const { events, locations } = this.state;

    return (
      <div className="App">
        <WarningAlert text={this.state.offlineWarning} className={'Alert-warning'} />
        <h1>Meet App</h1>
          <div className='search-wrapper'>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
            <NumberOfEvents updateEvents={this.updateEvents} eventCount={this.state.eventCount} />
          </div>
          <EventList events={events} />
      </div>
    );
  }
}

export default App;
