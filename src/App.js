import React, { Component } from 'react';
import './App.css';
// Components
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
// API functions
import { getEvents, extractLocations } from './api';
// rechart import
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

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
        maxNumEvents: null
      }
    }
  
  componentDidMount(){
    this.mounted = true;
    this.checkOnlineStatus();
    getEvents().then((events)=>{
      if (events.length < 32){
        this.setState({eventCount: events.length});
      }
      this.setState({maxNumEvents: events.length});
      
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
      if (events.length < 32){
        this.setState({eventCount: events.length});
      }
      this.setState({maxNumEvents: events.length});

      const locationEvents = (this.state.location === '') ?
      events.slice(0, this.state.eventCount) :
      events.filter((event)=>event.location === this.state.location).slice(0, this.state.eventCount);
      
      this.setState({
        events: locationEvents
      });
    });
  }

  getData=()=>{
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return {city, number};
    })
    return data;
  }
  
  render(){
    const { events, locations } = this.state;
    
    const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label"><b>City:</b> {payload[0].payload.city}</p>
            <p className="label"><b>Events:</b> {payload[0].payload.number}</p>
          </div>
        );
      }
    
      return null;
    };

    return (
      <div className="App">
        <WarningAlert text={this.state.offlineWarning} className={'Alert-warning'} />
        <h1>Meet App</h1>
          <div className='search-wrapper'>
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
            <NumberOfEvents updateEvents={this.updateEvents} eventCount={this.state.eventCount} maxNumEvents={this.state.maxNumEvents} />
          </div>
          <h2>Events in each city</h2>
          <div className="data-vis-wrapper">
            <EventGenre events={events} />
            <ResponsiveContainer height={300}>
              <ScatterChart
                width={800}
                height={400}
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type="category" dataKey="city" name="City" style={{fill: '#ffff'}} />
              <YAxis type="number" dataKey="number" name="Number of Events" style={{fill: '#ffff'}} allowDecimals={false} />
              <Tooltip content={<CustomTooltip />}/>
              <Scatter data={ this.getData() } fill="#DD6D85" />          
              </ScatterChart>
          </ResponsiveContainer>
         </div>
          <EventList events={events} />
      </div>
    );
  }
}

export default App;