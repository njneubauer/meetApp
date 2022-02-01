# User Stories
## Feature 2: Show/hide an event's details
### Scenario 1:
As a User <br>
I should be able to see a list of events with the element collapsed by default <br>
so that I can browse events 

### Scenario 2:
As a User <br>
I should be able to expand an element to see event details <br>
so that event details can be consumed <br>

### Scenario 3:
As a User <br>
I should be able to collapse an expanded event <br>
so that I can continue to browse events <br>

## Feature 3: Specify number of events <br>
### Scenario 1:
As a User <br>
I should be able to see a list of 32 events by default <br>
so that there is consistency to the UI layout by default <br>

### Scenario 2:
As a User <br>
I should be able to change the number of events I want to see <br>
so that I can browse more effectively <br>

## Feature 4: Use the app when offline
### Scenario 1:
As a User <br>
I should be able to view the website while offline <br>
so that I can view events while not connected to the internet <br>

### Scenario 2:
As a User <br>
I should see an error when changing the settings (city, time range) while offline <br>
so that I know why the events are not loading <br>

## Feature 5: Data visualization
### Scenario 1:
As a User <br>
I should be able to view a chart with the number of upcoming events <br>
so that I can keep track of how many events are coming up in the future <br>

<br>

# Gherkin (Given-When-Then)

## Feature 2: Show/hide an event's details

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

## Feature 3: Specify number of events

### Scenario 1: When user hasn’t specified a number, 32 is the default number
&nbsp;&nbsp; <strong> Given </strong> the user navigates to the events page <br>
&nbsp;&nbsp; <strong> When </strong> the event elements load <br>
&nbsp;&nbsp; <strong> Then </strong> the default number of events shown is set to 32 <br>

### Scenario 2: User can change the number of events they want to see
&nbsp;&nbsp; <strong> Given </strong> the user navigates to the events page <br>
&nbsp;&nbsp; <strong> When </strong> the event elements load <br>
&nbsp;&nbsp; <strong> Then </strong> the default number of events shown is set to 32 <br>

<br>

## Feature 4: Use the app when offline

### Scenario 1: Show cached data when there’s no internet connection
&nbsp;&nbsp; <strong> Given </strong> the user doesn't have an internet connection <br>
&nbsp;&nbsp; <strong> When </strong> the user attempts to load the page <br>
&nbsp;&nbsp; <strong> Then </strong> the cached data is displayed to the user <br>

### Scenario 2: Show error when user changes the settings (city, time range)
&nbsp;&nbsp; <strong> Given </strong> the user doesn't have internet connection <br>
&nbsp;&nbsp; <strong> When </strong> user attempts to change settings (city, time range) <br>
&nbsp;&nbsp; <strong> Then </strong> error is displayed to the user <br>

<br>

## Feature 5: Data visualization

### Scenario 1: Show a chart with the number of upcoming events in each city
&nbsp;&nbsp; <strong> Given </strong> user navigates to chart view <br>
&nbsp;&nbsp; <strong> When </strong> a chart is loaded <br>
&nbsp;&nbsp; <strong> Then </strong> it displays the number of upcoming events in each city <br>


