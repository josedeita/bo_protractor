Feature: Reassign Ticket

  As a distributor
  I want to be able to reassign tickets that have not been claimed
  So that I don't lose any of the tickets bought


  Background:
    Given that the distributor is in the BO
    And the distributor clicks on Events

  @reassignTickets
  Scenario: Clicking on Reassign
#    Given the distributor is on the Manage Tickets page
#    And he has at least one assigned ticket
#    When he clicks on Reassign
    Given the distributor is on the Manage Tickets page
    And he clicks on reassign button
    Then he sees the a alert message
    And he sees the alert icon
    And he sees the alert text 'Are you sure you want to reassign this ticket to someone else?'
    And he sees the X
    And he sees the 'Cancel' option
    And he sees the 'Confirm' option


  @cancelReassignTicket
  Scenario: Canceling reassign ticket
    Given the distributor has clicked on Reassign
    And he sees the alert message
    When he clicks on Cancel
    Then The the alert message is closed and the distributor is back on the Manage Tickets page
    And the ticket is still shown as assigned
