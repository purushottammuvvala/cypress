
class login
{
    login()
    {
        cy.contains('Login').click()
    }
    registerDetails()
    {
        //cy.get('').type(link)
        // cy.get('#loginFrm_loginname').type('ranjith')
        // cy.get('#loginFrm_password').type('ranjith')
        // cy.get('button[title="Login"]').click()
        cy.get('button[title="Continue"]').click()
        cy.get('#AccountFrm_firstname').type('ranjith')
        cy.get('#AccountFrm_lastname').type('ranjith')
        cy.get('#AccountFrm_email').type('ranjith@gmail.com')
        cy.get('#AccountFrm_address_1').type('mvr')
        cy.get('#AccountFrm_city').type('mvr')
        cy.get('#AccountFrm_zone_id').select('Aberdeen')
        //cy.get('#AccountFrm_zone_id').select('')
        cy.get('#AccountFrm_postcode').type(43222)
        cy.get('#AccountFrm_country_id').select('Croatia')
        cy.get('#AccountFrm_loginname').type('ranjith')
        cy.get('#AccountFrm_password').type('ranjith')
        cy.get('#AccountFrm_confirm').type('ranjith')
        cy.get('#AccountFrm_newsletter1').click()
        cy.get('#AccountFrm_agree').click()
        cy.get('button[title="Continue"]').click()
    }

}
export default login