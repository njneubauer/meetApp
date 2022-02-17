Feature: Show or hide event details using a button

Scenario: An event element is collapsed by default
   Given the user navigates to the events page
   When the event elements load
   Then the event elements are collapsed by default

Scenario: User can expand an event to see its details
   Given the list of events have been loaded
   When the user clicks on show details button for an event
   Then the event element is expanded to show the event details

Scenario: User can collapse an event to hide its details
   Given the list of events have been loaded
   When the user clicks on hide details button for an event
   Then the event element is collapsed