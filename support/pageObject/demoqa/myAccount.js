
class myAccount
{
    visit()
    {
        cy.visit('http://shop.demoqa.com/')
        //cy.get('.woocommerce-store-notice__dismiss-link').click()
    }
    My_Account()
    {
        cy.contains('My Account').click()
    }
    reg_username(link)

    {
        cy.get('#reg_username').type(link)
    }
    reg_email(link)
    {
        cy.get('#reg_email').type(link)
    }
    reg_password(link)
    {
        cy.get('#reg_password').type(link)
    }
    reg_registerBTn()
    {
        cy.get('button[name="register"]').click()
    }
    
    
    search()
    {
        cy.contains('Search').click()
    }
    searchText()
    {
        cy.get('input[name="s"]').type('shirt{enter}')
    }
    selectProduct()
    {
        cy.contains('blue denim super oversized boyfriend shirt').click()
        cy.get('#pa_color').select('Black')
        cy.get('#pa_size').select('32')
        //cy.wait(5000)
        cy.get('.single_add_to_cart_button').click()
        cy.go('back')
        cy.go('back')
        cy.contains('brown satin shirt').click({force: true})
        cy.get('#pa_color').select('Brown')
        cy.get('#pa_size').select('32')
        cy.get('.single_add_to_cart_button').click()
        //cy.contains('nude satin pyjama style shirt').click()
    }
}
export default myAccount