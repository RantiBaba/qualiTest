import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { practiceAutomation } from '../../../support/pageObjects/automationPractise.spec'


// Scenario: Order a TShirt
Given(`that I am on the automation practice home page`, function() {

    cy.visit(Cypress.env('baseUrl'))

})

When(`I click on the Sign In link`, function() {
    
    practiceAutomation.clickOnSignInButton()
    
})

And(`I enter my email address and click on the Create an account button`, function() {
    practiceAutomation.createAccountAuthentication()
})


And(`I enter required information into Your Personal Information section`, function() {
    practiceAutomation.personalInformationSection()

})

And(`I click on the Register button`, function(){

    practiceAutomation.personalInformationRegisterButton()
})

Then(`my account is created`, function() {

    practiceAutomation.newAccountCreated()

})


And(`I select a T-Shirt item and add to cart`, function() {

    practiceAutomation.clickOnTShirtLink()
    practiceAutomation.addItemToCart()
})


Then(`the item should be added to the cart`, function() {

    practiceAutomation.viewShoppingCart()
})


And(`I select payment method and I click on the, I confirm order button`, function() {
    practiceAutomation.paymentMethod()

})

Then(`the order is confirmed`, function() {

    practiceAutomation.orderConfirmed()
})



// Scenario: Update existing client's first name record
Given(`that I am on My account link`, function() {

    practiceAutomation.myAccountPage()
})

And(`I click on My Personal information link`, function() {

    practiceAutomation.myPersonalInformation()
})

And(`I update the First name field and I enter current password`, function() {

    practiceAutomation.updateFirstNameField()
})

And(`I click on the save button`, function() {
    practiceAutomation.clickOnSaveButton()
    
})

Then(`personal information should be updated`, function() {
    practiceAutomation.personalInfoUpdated()
    
})

