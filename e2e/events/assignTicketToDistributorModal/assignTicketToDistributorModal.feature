Feature: Assign Tickets to distributor

  As a distributor
  I want to be able to assign tickets to other distributors
  So that I can distribute tickets from a multiple ticket pack

  Background:
    Given that the distributor is in the BO
    Given the distributor is on the Manage Tickets page
    And he clicks on reassign button
    And he sees the alert message
    When he clicks on Confirm
    Then he sees the assignation modal


  @CheckingAssignModal
  Scenario: Clicking on Assign Ticket
    And he sees the 'Assign Ticket' label
    And he sees the ticket number
    And he sees the 'Distributor ID' label
    And he sees the ID field
    And he sees the next button with it's icon
    And he sees the 'My invitee is a guest' option
    And he sees the X to close the modal