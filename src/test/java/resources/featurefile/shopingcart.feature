Feature: Shopping Cart Functionality

  Scenario: User able to remove item in shopping cart
    Given I am on Home Page
    Then  I mousehover on WOMEN tab
    And   I click on Summer Dresses
    And   I click on Product
    And   I click on Add to cart button on Product
    And   I click on proceed to checkout button
    And   I click on delete icon
    Then  I can verify text 'Your shopping cart is empty.'



