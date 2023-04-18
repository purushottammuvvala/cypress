///<reference types = "Cypress"/>


describe('Data driven testing', () => {
    before(() => {
        cy.fixture('example').then(function(data)
    {
        globalThis.data = data
    })
    });
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(data.name);
          cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(data.password);
          cy.get(".oxd-button").click();
          cy.get('.oxd-userdropdown-icon').click()
          cy.contains('Logout').click()
    });
});