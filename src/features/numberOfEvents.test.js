import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import mockData from '../mockData';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    beforeAll(()=>{
        AppWrapper = mount(<App />);
    });

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
      given('the user navigates to the events page', () => {
        // App mounted in beforeAll();
      });
  
      when('the event elements load', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
      then('the default number of events shown is set to 32', () => {
        expect(AppWrapper.state('eventCount')).toEqual(32);
      });
    });
    test('User can change the number of events they want to see', ({ given, when, then }) => {
      given('the user changes the numerical value of number of events input', () => {
        AppWrapper.find('.number').simulate('change', { target: { value: 5}});
      });
  
      when('the event elements load', () => {
        AppWrapper.update();
      });
  
      then('the number of events shown is equal to the value entered into number of events input', () => {
        expect(AppWrapper.state('eventCount')).toEqual(5);
        expect(AppWrapper.find('.Event')).toHaveLength(5);
      });
    });
  });
