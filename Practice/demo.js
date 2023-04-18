describe('', () => {
    it('', () => {
        cy.visit('http://automationpractice.pl/index.php')//?id_category=3&controller=category
        //cy.get('li[class=".ajax_block_product"]').should('have.length','7')
        cy.get('.ajax_block_product').should('have.length','6')
    });
});