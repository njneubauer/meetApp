# User Stories
## <strong> Feature 1: Filter events by city </strong>
### <strong> User Story: </strong> As a user I should be able to filter events by city, so I can see a list of events that will take place in that city

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
&nbsp;&nbsp; <strong> Given </strong> the user has not searched for a city <br>
&nbsp;&nbsp; <strong> When </strong> the events load <br>
&nbsp;&nbsp; <strong> Then </strong> show events from all cities <br>

### Scenario 2: User should see a list of suggestions when they search for a city
&nbsp;&nbsp; <strong> Given </strong> a user searches for a city <br>
&nbsp;&nbsp; <strong> When </strong> the events load <br>
&nbsp;&nbsp; <strong> Then </strong> show event suggestions for that city <br>

### Scenario 3: User can select a city from the suggested list
&nbsp;&nbsp; <strong> Given </strong> the suggestion list loads <br>
&nbsp;&nbsp; <strong> When </strong> the user clicks on the dropdown <br>
&nbsp;&nbsp; <strong> Then </strong> they can select a suggested city <br>

<br>

## <strong> Feature 2: Show/hide an event's details </strong>
### <strong> User Story:</strong> As a user I should be able click on an event element, so I can toggle to show or hide the event details

<br>

### Scenario 1: An event element is collapsed by default
&nbsp;&nbsp; <strong> Given </strong> the user navigates to the events page <br>
&nbsp;&nbsp; <strong> When </strong> the event elements load <br>
&nbsp;&nbsp; <strong> Then </strong> the event elements are collapsed by default <br>

### Scenario 2: User can expand an event to see its details
&nbsp;&nbsp; <strong> Given </strong> the list of events have been loaded <br>
&nbsp;&nbsp; <strong> When </strong> the user clicks on "show details" button for an event <br>
&nbsp;&nbsp; <strong> Then </strong> the event element is expanded to show the event details <br>

### Scenario 3: User can collapse an event to hide its details
&nbsp;&nbsp; <strong> Given </strong> the list of events have been loaded <br>
&nbsp;&nbsp; <strong> When </strong> the user clicks on "hide details" button for an event <br>
&nbsp;&nbsp; <strong> Then </strong> the event element is collapsed <br>

<br>

## <strong> Feature 3: Specify number of events </strong>
### <strong> User Story: </strong> As a user I should be able to see a list of 32 events by default so that there is consistency to the UI layout by default 

<br>

### Scenario 1: When user hasn’t specified a number, 32 is the default number
&nbsp;&nbsp; <strong> Given </strong> the user navigates to the events page <br>
&nbsp;&nbsp; <strong> When </strong> the event elements load <br>
&nbsp;&nbsp; <strong> Then </strong> the default number of events shown is set to 32 <br>

### Scenario 2: User can change the number of events they want to see
&nbsp;&nbsp; <strong> Given </strong> the user navigates to the events page <br>
&nbsp;&nbsp; <strong> When </strong> the event elements load <br>
&nbsp;&nbsp; <strong> Then </strong> the default number of events shown is set to 32 <br>

<br>

## <strong> Feature 4: Use the app when offline </strong>
### <strong>User Story:</strong> As a user I should be able to use the application while offline, so I can get information without an internet connection

<br>

### Scenario 1: Show cached data when there’s no internet connection
&nbsp;&nbsp; <strong> Given </strong> the user doesn't have an internet connection <br>
&nbsp;&nbsp; <strong> When </strong> the user attempts to load the page <br>
&nbsp;&nbsp; <strong> Then </strong> the cached data is displayed to the user <br>

### Scenario 2: Show error when user changes the settings (city, time range)
&nbsp;&nbsp; <strong> Given </strong> the user doesn't have internet connection <br>
&nbsp;&nbsp; <strong> When </strong> user attempts to change settings (city, time range) <br>
&nbsp;&nbsp; <strong> Then </strong> error is displayed to the user <br>

<br>

## <strong> Feature 5: Data visualization </strong>
### <strong> User Story: </strong> As a User I should be able to view a chart with the number of upcoming events by city, so that I know what events are coming up in each city 

<br>

### Scenario 1: Show a chart with the number of upcoming events in each city
&nbsp;&nbsp; <strong> Given </strong> user navigates to main page and scrolls to chart <br>
&nbsp;&nbsp; <strong> When </strong> a chart is loaded <br>
&nbsp;&nbsp; <strong> Then </strong> it displays the number of upcoming events in each city


