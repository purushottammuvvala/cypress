class Home_page
{
    // visitHomePage(){
    //     cy.visit(Cypress.env("Orangehrm_HomePage"))
    // }
    // login(){
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.get('input[name="username"][placeholder="Username"]').type('Admin')
    //     cy.get('input[name="password"][placeholder="Password"]').type('admin123')
    //     cy.get('.oxd-button').click()
    // }

    visitHome(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    login(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"][placeholder="Username"]').type('Admin')
        cy.get('input[name="password"][placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
    }
}
export default Home_page