import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { practiceAutomation } from '../../../support/pageObjects/automationPractise.spec'


// Scenario: Order a TShirt

Given(`that I have signed in as a customer`, function() {

    cy.visit(Cypress.env('baseUrl'))

})

When(`I make an order`, function() {

    practiceAutomation.clickOnSignInButton()
    practiceAutomation.createAccountAuthentication()
    practiceAutomation.personalInformationSection()
    practiceAutomation.personalInformationRegisterButton()
    practiceAutomation.newAccountCreated()
    practiceAutomation.clickOnTShirtLink()
    practiceAutomation.addItemToCart()


})

Then(`My order is confirmed and seen in the Order History page`, function() {

    practiceAutomation.orderConfirmed()
    
})


// Scenario: Update existing client's first name record

Given(`that I am on Your Personal Information page`, function() {

    practiceAutomation.myAccountPage()
    practiceAutomation.myPersonalInformation()
})

When(`I update my first name record`, function() {

    practiceAutomation.updateFirstNameField()
})


Then(`personal information should be updated`, function() {

    practiceAutomation.personalInfoUpdated()
})



