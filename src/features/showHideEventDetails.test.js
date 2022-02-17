import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import mockData from '../mockData';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    beforeAll(()=>{
        AppWrapper = mount(<App />);
    });

    test('An event element is collapsed by default', ({ given, when, then }) => {
      given('the user navigates to the events page', () => {
        // App mounted in beforeAll()
      });
      when('the event elements load', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
  
      then('the event elements are collapsed by default', () => {
        expect(AppWrapper.find('.details')).toHaveLength(0);
      });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
      given('the list of events have been loaded', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
  
      when('the user clicks on show details button for an event', () => {
        expect(AppWrapper.find('.details-btn').at(0).text()).toBe('show details');
        AppWrapper.find('.details-btn').at(0).props().onClick();
        expect(AppWrapper.find('.details-btn').at(0).text()).toBe('hide details');

      });
  
      then('the event element is expanded to show the event details', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.details')).toHaveLength(1);
      });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
      given('the list of events have been loaded', async() => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
  
      when('the user clicks on hide details button for an event', () => {
        expect(AppWrapper.find('.details-btn').at(0).text()).toBe('hide details');
        AppWrapper.find('.details-btn').at(0).props().onClick();
        expect(AppWrapper.find('.details-btn').at(0).text()).toBe('show details');
      });
  
      then('the event element is collapsed', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.details')).toHaveLength(0);
      });
    });
});