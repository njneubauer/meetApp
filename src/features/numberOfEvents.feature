Feature: Specify number of events to display

Scenario: When user hasn’t specified a number, 32 is the default number
   Given the user navigates to the events page
   When the event elements load
   Then the default number of events shown is set to 32

Scenario: User can change the number of events they want to see
   Given the user changes the numerical value of number of events input
   When the event elements load
   Then the number of events shown is equal to the value entered into number of events input