
Feature: Automation Practise


Scenario: Order a TShirt
    Given that I have signed in as a customer
    When I make an order
    Then My order is confirmed and seen in the Order History page


Scenario: Update existing client's first name record
    Given that I am on Your Personal Information page
    When I update my first name record
    Then personal information should be updated



        
