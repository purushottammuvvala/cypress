class checkout
{
    visit()
    {
        cy.visit('http://shop.demoqa.com/')
        cy.get('.woocommerce-store-notice__dismiss-link').click({force: true})
    }
    click_chekout()
    {
        cy.contains('Checkout').click()
    }
    fill_form_name()
    {
        cy.get('#billing_first_name').type('ranjith')
        cy.get('#billing_last_name').type('m')
        
        cy.get('#billing_address_1').type('nuvvalarevu')
        cy.get('#billing_city').type('Bilaspur')
        
        cy.get('#billing_postcode').type('144411')
        cy.get('#billing_phone').type('844746383')
        cy.get('tbody > :nth-child(1) > .product-name').should('contain','blue denim super oversized boyfriend shirt')
        cy.get('tbody > :nth-child(2) > .product-name').should('contain','brown satin shirt')
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
   
}
export default checkout