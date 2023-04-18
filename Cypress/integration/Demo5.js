///<reference types="Cypress"/>


describe('alias and invoke', () => {
    it('test case', () => {
        cy.visit("https://automationteststore.com/");

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke("text").as("Productname1")
        cy.get('@Productname1').its("length").should('be.gt',5)
        cy.get('@Productname1').should('includes',"Seaweed Conditioner")
    });
});