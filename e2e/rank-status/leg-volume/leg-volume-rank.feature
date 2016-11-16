Feature: Limit Leg Volume pop up on Rank Status
    As a Distributor in China
    I want to see just the ID and the volume for each leg so
    that I have no legal issues with the local government.

@legVolume
Scenario: A distributor inside China sees ID and Volume by leg only
    Given that a distributor is inside China
    And he clicks on the Reports Menu
    And he is on the Rank Status
    And he is on his current rank
    When he opens View Leg details option
    Then he sees the downline's ID and Volume for each leg
