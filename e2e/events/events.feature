Feature: Display events on the Events page
    As a Distributor
    I want to have the option to view the events through my Back Office
    So that I can learn about the open and upcoming events and buy tickets

Background:
    Given that the distributor is in the BO
    And the distributor clicks on Events

Scenario: Show message when there are no events
    Given That there aren't any events
    When the distributor see the Events page
    Then he sees a message that says "There are no open or upcoming events, check back later"
