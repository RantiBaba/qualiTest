
Feature: Automation Practise

Scenario: Order a TShirt 
    Given that I am on the automation practice home page
        When I click on the Sign In link
        And I enter my email address and click on the Create an account button
        And I enter required information into Your Personal Information section
        And I click on the Register button
        Then my account is created
        And I select a T-Shirt item and add to cart
        Then the item should be added to the cart
        And I select payment method and I click on the, I confirm order button
        Then the order is confirmed


Scenario: Update existing client's first name record
    Given that I am on My account link
    And I click on My Personal information link
    And I update the First name field and I enter current password
    And I click on the save button
    Then personal information should be updated

        
