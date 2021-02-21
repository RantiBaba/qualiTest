import { randomFirstName, randomLastName, randomEmail, randomPassword, randomFullName, randomFirstNameChange, currentFullName } from './fakeData'

let price
let orderNumber

export class automationPractice {



    clickOnSignInButton() {
        cy.get(`[title="Log in to your customer account"]`).click()
    }

    createAccountAuthentication () {
        cy.get(`#email_create`).then(enterEmail => {
            cy.wrap(enterEmail).type(randomEmail)
        })
        cy.get(`#SubmitCreate`).click()
      
    }

    personalInformationSection() {        

        cy.get(`#id_gender1`).click()
        cy.get(`#customer_firstname`).type(randomFirstName).should('contain.value', randomFirstName)
        cy.get(`#customer_lastname`).type(randomLastName).should('contain.value', randomLastName)
        cy.get(`#passwd`).type(randomPassword).should('contain.value', randomPassword)
        cy.get(`#email`).then(email => {
            cy.wrap(email).clear().type(randomEmail).should('contain.value', randomEmail)
        })
        cy.get('#days').select('15').should('have.value', '15')
        cy.get('#months').select('June').should('have.value', '6')
        cy.get('#years').select('1981').should('have.value', '1981')
        cy.get(`#firstname`).should('contain.value', randomFirstName)
        cy.get(`#lastname`).should('contain.value', randomLastName)
        cy.get(`#address1`).type('1 Test Lane').should('contain.value', '1 Test Lane')
        cy.get(`#city`).type('New York').should('contain.value', 'New York')
        cy.get('#id_state').select('New York').should('contain.value', '32')
        cy.get('#postcode').type(12345).should('contain.value', 12345)
        cy.get('#id_country').should('contain.text', 'United States')
        cy.get('#phone_mobile').type(123456789).should('contain.value', 123456789)
        cy.get('#alias').should('have.value', 'My address')
        
    }

    personalInformationRegisterButton () {
        cy.get(`#submitAccount`).click()
    }


    newAccountCreated() {
        cy.url().should('include','/index.php?controller')
    }

    loginToAccount() {
        cy.get(`[title="Log in to your customer account"]`).click()
        cy.get(`#email`).type(randomEmail).should('contain.value', randomEmail)
        cy.get(`#passwd`).type(randomPassword).should('contain.value', randomPassword)
        cy.get(`#SubmitLogin`).click()
        cy.url().should('include','http://automationpractice.com/index.php?controller=my-account')

    }

    clickOnTShirtLink () {
        cy.get('.sf-menu > :nth-child(3) > a').click()
       
    }

    addItemToCart() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.get(`[title="Faded Short Sleeve T-shirts"][itemprop="image"]`).click()
        cy.get(`[name="Submit"][class="exclusive"]`).click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get(`#uniform-cgv`).click()
        cy.get('.cart_navigation > .button > span').click()
    }

    viewShoppingCart() {
        cy.get('#total_price').then( totalPrice => {

            const totalPriceText = totalPrice.text().trim()
            price = totalPriceText
            cy.log(price)
        } )

        cy.get('[title="View my shopping cart"] > .ajax_cart_product_txt').should('contain.text', 'Product')
    }

    paymentMethod() {

        cy.get(`#HOOK_PAYMENT`).find('.bankwire').click()
        cy.get(`[class="box cheque-box"]`)
        .should('include.text', 'Bank-wire payment.')
        .and('include.text', 'You have chosen to pay by bank wire. Here is a short summary of your order:')
        cy.url().should('eq', 'http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment')
        cy.get('#cart_navigation > .button > span').click()
    }

    orderConfirmed() {
        cy.url().should('include', 'order-confirmation')
        // cy.get('.box').then( textBox => {
           // cy.wrap(textBox).
       
        // } )
        cy.get(`[class="breadcrumb clearfix"]`).find(`[class="navigation_page"]`).should('include.text', 'Order confirmation')
        cy.get('.cheque-indent > .dark').should('contain.text', 'Your order on My Store is complete.')
        cy.get(`[title="View my shopping cart"]`).should('contain', '(empty)')
        
    }

    myAccountPage() {

        cy.get(`[title="View my customer account"]`).then( fullName => {

            const fullNameText = fullName.text().trim()
            expect(fullNameText).to.equal(randomFullName);
            cy.wrap(fullName).click()
            cy.url().should(`include`, `/index.php?controller`)
            cy.get('#email').type(randomEmail)
            cy.get('#passwd').type(randomPassword)
            cy.url().should(`include`, `/index.php?controller`)
            cy.get('#SubmitLogin > span').click()

        })
    }

    myPersonalInformation() {
        cy.get(`[title="Information"]`).click()
        
    }

    updateFirstNameField() {
        cy.get(`#firstname`).clear().type(randomFirstNameChange)
        cy.get(`#old_passwd`).clear().type(randomPassword)

    }

    clickOnSaveButton () {
        cy.get(':nth-child(11) > .btn > span').click()
    }

    personalInfoUpdated() {
        cy.get(`p`)
        .should('contain', 'Your personal information has been successfully updated.')
        cy.get(`[title="View my customer account"]`).then( customerFullName => {

            const fullNameText = customerFullName.text().trim()
            expect(fullNameText).to.equal(currentFullName);
            cy.wrap(customerFullName).click()
            cy.url().should(`include`, `/index.php?controller`)

        })
    }

}
export const practiceAutomation = new automationPractice()