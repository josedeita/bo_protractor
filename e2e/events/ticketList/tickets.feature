Feature: List of tickets that the distributor bought
    As a distributor
    I want to be able to see all the tickets I bought
    so that I can manage what I want to do with them, who I want to send them to and how many I have available

Background:
    Given that the distributor is in the BO
    And the distributor clicks on Events

@ticketList
Scenario: Navigate to Manage Tickets from the Events page and see the events information
    Given that the distributor has bought tickets for one specific event
    When he clicks on Manage Tickets for that specific event
    Then he sees the Manage Tickets page
    And he sees the image for that event
    And he sees the date of that event
    # And he sees the location of that event
    # And he sees the option to buy more tickets
