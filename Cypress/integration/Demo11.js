///<reference types = "Cypress"/>

describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get(".oxd-button").click();
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('L')
        cy.get('.oxd-autocomplete-dropdown > * >span').each(($el,index,$list)=>{
            cy.log(`index: ${index} : ${$el.text()}`)
            if($el.text()=="Linda Jane Anderson")
            {
                cy.wrap($el).click()
            }
        })
    });
});