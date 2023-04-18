class login
{
    visit()
    {
        cy.visit('http://shop.demoqa.com/')
        cy.get('.woocommerce-store-notice__dismiss-link').click({force: true})
    }
    My_Account()
    {
        cy.contains('My Account').click()
    }
    details_username(link)
    {
        cy.get('#username').type(link)
        
    }
    details_password(link)
    {
        cy.get('#password').type(link)
    }
    details_login()
    {
        cy.get('button[name="login"]').click()
    }
    details_assert(link)
    {
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain',link)
    }
}
export default login