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


  @assignTicketInputValidDistributorIdAndNext
  Scenario: Input valid distributor ID and next
    When he inputs a valid <distributor ID>
    And clicks on next
    Then he sees the Assign Ticket label
    And he sees the ticket number
    And he sees the Distributor ID label
    And he sees the ID field populated with the provided <distributor ID>
    And he sees the Name label
    And he sees the name field populated with the <distributor name> according to the service
    And he sees the Name field un-editable
    And he sees the Email label
    And he sees the email field populated with the <distributor email> according to the service
    And he sees the email field editable
    And he sees the Cancel option
    And he sees the Send option

  @assignTicketInvalidInputDistributorIdAndNext
  Scenario: Input invalid distributor ID and next
    When he inputs an invalid <distributor ID>
    And clicks on next
    Then he sees an <invalid ID message>


  @clickingOutsideAssignTicketToDistributorModal
  Scenario: Clicking outside the modal Assign Ticket for distributor
    When he clicks outside the modal
    Then he sees the assignation modal

  @fillGuestForm
  Scenario Outline: Sent successfully
    When he clicks on invite a guest option
    And he sees the Name label field editable
    And he sees the Email label
    And he inputs a name "<name>"
    And he inputs a valid email <email>
    When he clicks send button
    Then he sees my confirmation modal
    Examples:
      | name      | email     |
      | Sebastian | s@s.com   |
      |           | s@psl.com |