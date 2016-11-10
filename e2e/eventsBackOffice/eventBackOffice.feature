Feature: Display events on the Events page
    As a Distributor
    I want to have the option to view the events through my Back Office
    So that I can learn about the open and upcoming events and buy tickets

# Background:
#     Given that the distributor is in the BO
#     And the distributor clicks on Events

Scenario: Go to Events page through the header calendar icon
    Given that the distributor is in the BO
    When he clicks on the header calendar icon of Events
    Then he see to the new Events page from BO

Scenario: Show message when there are no events
    Given That there aren't any events
    When the distributor clicks on Events
    Then he sees a message that says "There are no open or upcoming events, check back later"

Scenario: Show only one event
    Given that there is only ONE event
    When the distributor clicks on Events
    Then he sees the image for that event on the highlighted position
    And he sees the date of that event on the highlighted position
    And he sees the location of that event on the highlighted position
    And he sees the name of the event on the highlighted position

Scenario: Show more that one event
    Given that there is MORE THAN ONE event
    When the distributor clicks on Events
    Then he see the highlighted event on the highlighted position
    And he see the secondary events with all their information (Image, date, location, title)

Scenario: Show secondary events sorted by start date
    Given that there is MORE THAN ONE event
    When the distributor click on Events
    Then he see the secondary events sorted by start date

Scenario: Show secondary events grouped
    Given that there is MORE THAN ONE event
    When the distributor clicks on Events
    Then he sees the secondary events grouped by year
    And he sees the labels for each year group with the number of the year
    And he sees the secondary events grouped by month
    And he sees the labels for each month group with the month name

Scenario: Show buy tickets for the highlighted and secondary events
    Given That there is an event (highlighted or secondary) on the Events page
    And the distributor has not bought any tickets for that event
    When he clicks on Events
    Then he sees the Buy Tickets button for that event

Scenario: Show manage tickets for the highlighted and secondary events
    Given that there is an event (highlighted or secondary) on the Events page
    And the distributor has already bought tickets for the Event
    When he clicks on Events
    Then he sees the Manage Tickets button for that event

Scenario: Navigate to shop when clicking on buy tickets
    Given that there is an event (highlighted or secondary) on the Events page
    And the event has a Buy Tickets option
    When the distributor clicks on Buy Tickets
    Then he's taken to Kyani Shop URL for that product on a new browser tab

Scenario: Show message when service fails or times out
    Given that the distributor is in the BO
    And the service for events fails or times out
    When he clicks on Events
    Then he gets to the new Events page from BO
    And he sees the message "No data found"

Scenario: Show according to the rep allowed
    Given that the distributor has the attribute events:true
    When he logs in to the BO
    Then he sees the Calendar Icon on the header for Events
    And he can navigate to the events page

Scenario: Hide according to the rep allowed
    Given that the distributor has the attribute events:false
    When he logs in to the BO
    Then he cannot see the Calendar Icon on the header for Events
