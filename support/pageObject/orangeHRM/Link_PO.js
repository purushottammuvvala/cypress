class Link_PO
{
    // link_click(Links)
    // {
    //     cy.contains(Links).click()
    // }
    link_click(link){
        cy.contains(link).click()
    }
}
export default Link_PO