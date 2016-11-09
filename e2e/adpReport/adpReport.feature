Feature: China ADP Report
    As a Kyani Distributor I want to see the distributors in my downline
    who have ADP payment so that I can see my downline

    Scenario: UI - Distributor in China sees ADP Report
        Given a distributor in China logged into the Backoffice
        And the distributor has access to the ADP report from the Rep/Allowed
        When the distributor goes to the Report's Menu
        Then he sees the ADP submenu active

    Scenario: UI - Distributor sees the correct fields for the ADP Report
        Given a Chinese distributor is logged into the Backoffice
        And the distributor has access from the Rep/Allowed to the ADP report
        And he is on the Report's Menu
        When he selects the ADP option
        Then the user sees the fields: Report Title, Build Date, Company names, Company IDs, Personally Sponsored, Leg 1 Information, Leg 2 Information, Leg 3 Information and Other Legs Information, Leg 1 Volume, Leg 2 Volume, Leg 3 Volume and Other Legs Volume, next option and previous option
