Feature: List of tickets that the distributor bought
    As a distributor
    I want to be able to see all the tickets I bought
    so that I can manage what I want to do with them, who I want to send them to and how many I have available

Background:
    Given that the distributor is in the BO
    And the distributor clicks on Events

# @ticketsList
Scenario: 01 - Navigate to Manage Tickets from the Events page and see the events information
    Given that the distributor has bought tickets for one specific event
    When he clicks on Manage Tickets for that specific event
    Then he sees the Manage Tickets page
    And he sees the image for that event
    And he sees the date of that event
    And he sees the location of that event
    And he sees the option to buy more tickets

# @ticketsList
Scenario: 02 - Navigate to Kyani Shop from Manage Tickets page
    Given that the distributor has bought tickets for one specific event
    And he clicks on Manage Tickets for that specific event
    And he's on the Manage Tickets page for that event
    When he clicks on Buy More Tickets
    Then he's taken to Kyani Shop URL for that product on a new browser tab

# @ticketsList
Scenario: 03 - Show first ticket as My Ticket
    Given that the distributor has bought tickets for one specific event
    When he clicks on Manage Tickets for that specific event
    Then he sees first ticket card
    And he sees the My Ticket label
    And he sees the Ticket Number label
    And he sees the ticket number
    And he sees the register icon
    And he sees the register option

@ticketsList
Scenario: 04 Show more than one ticket
Given that the distributor has bought tickets for one specific event
When he clicks on Manage Tickets for that specific event
    Then he sees one ticket card as My Ticket 
    And he sees unassigned ticket cards for all the other tickets bought
    And he sees the unassigned icon on each of the unassigned ticket cards
    And he sees the Ticket Number label on each of the unassigned ticket cards
    And he sees the ticket number on each of the unassigned ticket cards
    And he sees the assign ticket icon on each of the unassigned ticket cards
    And he sees the Assign Ticket option on each of the unassigned ticket cards
