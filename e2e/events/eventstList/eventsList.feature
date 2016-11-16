Feature: Display events on the Events page
As a Distributor
I want to have the option to view the events through my Back Office
So that I can learn about the open and upcoming events and buy tickets

Scenario: Go to Events page through the header calendar icon
    Given that the distributor is in the BO
    When the distributor clicks on Events
    Then he gets to the new Events page from BO

Scenario: Show only one event
    Given that the distributor is in the BO
    And there is only ONE event
    When the distributor clicks on Events
    Then he sees the image for that event on the highlighted position
    And he sees the date of that event on the highlighted position
    And he sees the location of that event on the highlighted position
    And he sees the name of the event on the highlighted position

Scenario: Show more that one event
    Given that the distributor is in the BO
    And that there is MORE THAN ONE event
    When the distributor clicks on Events
    Then he see the highlighted event on the highlighted position
    And he see the secondary events with all their information (Image, date, location, title)

@eventsList
Scenario: Show secondary events sorted by start date
    Given that there is MORE THAN ONE event
    When the distributor clicks on Events
    Then he see the secondary events sorted by start date
