Feature: List of tickets that the distributor bought
    As a distributor
    I want to be able to see all the tickets I bought
    so that I can manage what I want to do with them, who I want to send them to and how many I have available

Background:
    Given that the distributor is in the BO
    And the distributor clicks on Events

# @ticketsList
Scenario: Navigate to Manage Tickets from the Events page and see the events information
    Given that the distributor has bought tickets for one specific event
    When he clicks on Manage Tickets for that specific event
    Then he sees the Manage Tickets page
    And he sees the image for that event
    And he sees the date of that event
    And he sees the location of that event
    And he sees the option to buy more tickets

# @ticketsList
Scenario: Navigate to Kyani Shop from Manage Tickets page
    Given that the distributor has bought tickets for one specific event
    And he clicks on Manage Tickets for that specific event
    And he's on the Manage Tickets page for that event
    When he clicks on Buy More Tickets
    Then he's taken to Kyani Shop URL for that product on a new browser tab

@ticketsList
Scenario: Show only one ticket as My Ticket
    Given that the distributor has bought ONE ticket for the event
    When he clicks on Manage Tickets for that specific event
    Then he sees one ticket card
    And he sees the "My Ticket" label
    And he sees the "Ticket" label
    And he sees the ticket number
    And he sees the register icon
    And he sees the "Register" option
