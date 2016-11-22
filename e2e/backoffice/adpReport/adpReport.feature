Feature: China ADP Report
    As a Kyani Distributor I want to see the distributors in my downline
    who have ADP payment so that I can see my downline

    Scenario: UI - Distributor in China sees ADP Report
        Given a distributor in China logged into the Backoffice
        And the distributor has access to the ADP report from the Rep/Allowed
        When the distributor goes to the Report's Menu
        Then he sees the ADP submenu active

    Scenario: UI - Distributor sees the correct fields for the ADP Report
        Given a distributor is log into the Backoffice in China
        And the distributor has access from the Rep/Allowed to the ADP report
        And he is on the Report's Menu
        When he selects the ADP option
        Then the user sees the fields: Report Title, Build Date, Company names, Company IDs, Personally Sponsored, Leg one Information, Leg two Information, Leg three Information and Other Legs Information, Leg one Volume, Leg two Volume, Leg three Volume and Other Legs Volume, next option and previous option

    Scenario: UI - Distributor outside China does not see the ADP Report
        Given a distributor is outside of China and he is logged into the Backoffice
        And the distributor does not have access to the ADP report from the Rep/Allowed
        When the distributor navigates to the Report's Menu
        Then he does not see the ADP submenu active.

    Scenario: UI - Distributor sees an icon and a message when there are no downlines
        Given a distributor in China logged into the Kyani Backoffice
        And the distributor has access to the ADP report from the Rep/Allowed and he doesn't have any downline with ADP Payment and he is on the Report's Menu
        When he clicks in the ADP option
        Then the user sees the message: "You do not have any distributor with ADP Payment yet"
        And he also sees the icon applicable when there is no information to display
