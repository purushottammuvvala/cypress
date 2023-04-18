///<reference types = "Cypress"/>


//browser navigation command
//go back, go forward,refresh and url()


describe('Browser navigation commands', () => {
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
          cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
          cy.get(".oxd-button").click();

          cy.contains('Admin').click()
        //captures the current url
          cy.url().should('include','admin')
           //wait for sometime
           //cy.wait(4000)
          //i want to go back
          cy.go('back')
          //i want to go forward
          cy.go('forward')
          //i want to refresh//it will not remove the cache
          cy.reload()
          //to remove cache of webpage
          cy.reload(true)
          
          //to fetch title of a page
          cy.title().should('include','OrangeHRM')

          //to check if a property is present in document(whole website)
          cy.document().should('have.property','charset','UTF-8') 
    });
});