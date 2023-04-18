class visitExplore
{
    visit()
    {
        cy.visit('https://www.formula1.com/en.html')
    }
    explore()
    {
        cy.get('#truste-consent-button').click()
        cy.get('.menu').click()
        
    }
}
export default visitExplore