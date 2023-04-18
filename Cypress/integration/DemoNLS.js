///<reference types="Cypress"/>
///<reference types = "@cypress/xpath"/>

describe('Search for nineleaps and search linkedin', () => {

    
    it('mouse action', () => {
        cy.visit('https://www.google.com')
        cy.get('input[name="q"]').type("nineleaps{enter}")
        //cy.scrollTo(0,400)
        cy.get('a[href$="nineleaps"]').eq(0).scrollIntoView().click()
        //cy.get('a[href$="nineleaps"]').eq(0).click()

    });
    it('', () => {
        
    });
});