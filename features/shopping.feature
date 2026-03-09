Feature: SauceDemo shopping flow

  Scenario: User adds a product to the shopping cart
    Given I open the SauceDemo page
    When I login with user "standard_user" and password "secret_sauce"
    Then I should see the products page
    When I add "Sauce Labs Backpack" to the cart
    Then I should see "1" item in the cart
    And I logout