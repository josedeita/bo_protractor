# Feature: List of tickets that the distributor bought
#     As a distributor
#     I want to be able to see all the tickets I bought
#     so that I can manage what I want to do with them, who I want to send them to and how many I have available
#
# Scenario: 01 - Navigate to Manage Tickets from the Events page and see the events information
#     Given that the distributor has bought tickets for one specific event
#     When he clicks on Manage Tickets for that specific event
#     Then he sees the Manage Tickets page
#     And he sees the image for that event
#     And he sees the date of that event
#     And he sees the location of that event
#     And he sees the option to buy more tickets
#
# Scenario: 02 - Navigate to Kyani Shop from Manage Tickets page
#     Given that the distributor has bought tickets for one specific event
#     And he's on the Manage Tickets page for that event
#     When he clicks on Buy More Tickets
#     Then he's taken to Kyani Shop URL for that product on a new browser tab
#
# Scenario: 03 - Show only one ticket as My Ticket
#     Given that the distributor has bought ONE ticket for the event
#     When he clicks on Manage Tickets for that specific event
#     Then he sees one ticket card
#     And he sees the "My Ticket" label
#     And he sees the "Ticket" label
#     And he sees the ticket number
#     And he sees the register icon
#     And he sees the "Register" option
#
# Scenario: 04 - Show more than one ticket
#     Given that the distributor has bought MORE THAN ONE ticket for the event
#     When he clicks on Manage Tickets for that specific event
#     Then he sees one ticket card as My Ticket
#     And he sees unassigned ticket cards for all the other tickets bought
#     And he sees the unassigned icon on each of the unassigned ticket cards
#     And he sees the "Ticket Number" label on each of the unassigned ticket cards
#     And he sees the ticket number on each of the unassigned ticket cards
#     And he sees the assign ticket icon on each of the unassigned ticket cards
#     And he sees the "Assign Ticket" option on each of the unassigned ticket cards
#
#     # Scenario Outline: eating
#     #   Given there are <start> cucumbers
#     #   When I eat <eat> cucumbers
#     #   Then I should have <left> cucumbers
#     #
#     #   Examples:
#     #     | start | eat | left |
#     #     |  12   |  5  |  7   |
#     #     |  20   |  5  |  15  |
