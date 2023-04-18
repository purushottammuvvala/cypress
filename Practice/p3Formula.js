import visitExplore from "../support/pageObject/Pformula/visit&explore";

///<reference types="Cypress"/>

describe('formula', () => {
 
    const formula=new visitExplore()

    it('1', () => {
        formula.visit()
        formula.explore()
        cy.SelectName('Drivers')
        cy.get('.evg-overlay-close').click()
        cy.get(':nth-child(3) > .listing-item--link > .f1-border--top-right > .container > .row').click()
    });
});