Feature: Create An Account Functionality

  Scenario Outline: User should able to create new Account
    Given I am on Home Page
    Then  I can click on SignIn Page
    And   I can enter new "<email>" id
    And   I can click on Create an account button
    And   I can enter FirstName "<First name>"
    And   I can enter LastName"<Last name>"
    And   I can enter Password"<Password>"
    And   I can enter Address"<Address>"
    And   I can enter City"<City>"
    And   I can select State"<State>"
    And   I can enter Post Code"<Postal Code>"
    And   I can enter Mobile Phone"<Mobile phone>"
    And   I click on Register button
    Then  I can see the Account Name on Top Reigt

    Examples:
      | email            | First name | Last name | Password | Address                      | City    | State   | Postal Code | Mobile phone |
      | qa12346@gmail.com | Test       | QA        | 123456   | 55 Trinity Avenue SW Atlanta | Atlanta | Georgia | 30303       | 1234567890   |





