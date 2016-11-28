Feature: Limit Leg Volume pop up on Paygate Status
    As a Distributor in China
    I want to see just the ID and the volume for each leg so
    that I have no legal issues with the local government.

@legVolumePay
Scenario: A distributor inside China sees ID and Volume by leg only in Paygates
    Given that a distributor is inside China
    And he clicks on the Reports Menu
    And he clicks on the rank menu
    And he clicks on the paygates submenu
    And he is on the Paygate Status China
    And he is on his current rank
    When he opens View Leg details option
    Then he sees the downline's ID
    And Volume for each leg
    And he does not see the downline's picture
    And does not see the downline's Name
    And does not see the link to the Downline Tree

@legVolumePay
Scenario: A distributor outside China sees Picture, Name, ID, Volume by leg only and link to the Downline Tree in Paygates
Given that a distributor is outside China
    And he clicks on the Reports Menu
    And he clicks on the rank menu
    And he clicks on the paygates submenu
    And he is on the Paygate Status
    And he is on his current rank
    When he opens View Leg details option
    Then he sees the downline's picture
    And the downline's Name
    And the downline's ID
    And Volume for each leg
    And the link to the Downline Tree

