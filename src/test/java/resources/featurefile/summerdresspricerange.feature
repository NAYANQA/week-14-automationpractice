Feature: Change The Price Range

  Scenario: User should be able to Change Price Range
    Given I am on Home Page
    Then  I mousehover on WOMEN tab
    And   I click on Summer Dresses
    And   I can change the price slider $16-$20
    Then  I can see item returned with price range





