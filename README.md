# MeetApp
## Objective
To build a serverless progressive web application with ReactJS using a test-driven development (TDD) technique. This application will use google calendar API to fetch upcoming events.

<br>

# Features & User Stories
## **Feature 1: Filter events by city**
### User Story:
* As a user I should be able to filter events by city, so I can see a list of events that will take place in that city

<br>

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
&nbsp;&nbsp; **Given** the user has not searched for a city <br>
&nbsp;&nbsp; **When** the events load <br>
&nbsp;&nbsp; **Then** show events from all cities <br>

### Scenario 2: User should see a list of suggestions when they search for a city
&nbsp;&nbsp; **Given** a user searches for a city <br>
&nbsp;&nbsp; **When** the events load <br>
&nbsp;&nbsp; **Then** show event suggestions for that city <br>

### Scenario 3: User can select a city from the suggested list
&nbsp;&nbsp; **Given** the suggestion list loads <br>
&nbsp;&nbsp; **When** the user clicks on the dropdown <br>
&nbsp;&nbsp; **Then** they can select a suggested city <br>

<br>

## **Feature 2: Show/hide an event's details**
### User Story: 
* As a user I should be able click on an event element, so I can toggle to show or hide the event details

<br>

### Scenario 1: An event element is collapsed by default
&nbsp;&nbsp; **Given** the user navigates to the events page <br>
&nbsp;&nbsp; **When** the event elements load <br>
&nbsp;&nbsp; **Then** the event elements are collapsed by default <br>

### Scenario 2: User can expand an event to see its details
&nbsp;&nbsp; **Given** the list of events have been loaded <br>
&nbsp;&nbsp; **When** the user clicks on "show details" button for an event <br>
&nbsp;&nbsp; **Then** the event element is expanded to show the event details <br>

### Scenario 3: User can collapse an event to hide its details
&nbsp;&nbsp; **Given** the list of events have been loaded <br>
&nbsp;&nbsp; **When** the user clicks on "hide details" button for an event <br>
&nbsp;&nbsp; **Then** the event element is collapsed <br>

<br>

## **Feature 3: Specify number of events**
### User Story:
* As a user I should be able to see a list of 32 events by default so that there is consistency to the UI layout by default 

<br>

### Scenario 1: When user hasn’t specified a number, 32 is the default number
&nbsp;&nbsp; **Given** the user navigates to the events page <br>
&nbsp;&nbsp; **When** the event elements load <br>
&nbsp;&nbsp; **Then** the default number of events shown is set to 32 <br>

### Scenario 2: User can change the number of events they want to see
&nbsp;&nbsp; **Given** the user changes the numerical value of number of events input <br>
&nbsp;&nbsp; **When** the event elements load <br>
&nbsp;&nbsp; **Then** the number of events shown is equal to the value entered into number of events input <br>

<br>

## **Feature 4: Use the app when offline**
### User Story: 
* As a user I should be able to use the application while offline, so I can get information without an internet connection

<br>

### Scenario 1: Show cached data when there’s no internet connection
&nbsp;&nbsp; **Given** the user doesn't have an internet connection <br>
&nbsp;&nbsp; **When** the user attempts to load the page <br>
&nbsp;&nbsp; **Then** the cached data is displayed to the user <br>

### Scenario 2: Show error when user changes the settings (city, time range)
&nbsp;&nbsp; **Given** the user doesn't have internet connection <br>
&nbsp;&nbsp; **When** user attempts to change settings (city, time range) <br>
&nbsp;&nbsp; **Then** error is displayed to the user <br>

<br>

## **Feature 5: Data visualization**
### User Story: 
* As a User I should be able to view a chart with the number of upcoming events by city, so that I know what events are coming up in each city 

<br>

### Scenario 1: Show a chart with the number of upcoming events in each city
&nbsp;&nbsp; **Given** user navigates to main page and scrolls to chart <br>
&nbsp;&nbsp; **When** a chart is loaded <br>
&nbsp;&nbsp; **Then** it displays the number of upcoming events in each city


