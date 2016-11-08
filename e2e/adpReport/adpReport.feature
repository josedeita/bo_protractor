Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given a valid chinese distributor is logged into the backoffice
        When the distributor click in the Reports menu
        Then he should see the ADP submenu active
