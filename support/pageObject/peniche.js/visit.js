class visit
{
    home()
    {
        cy.visit('https://www.cm-peniche.pt/')
    }
    muesuem(link)
    {
        cy.contains('Visit').click()
    }
}
export default visit