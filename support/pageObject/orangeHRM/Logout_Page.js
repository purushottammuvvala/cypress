class Logout_page
{
    // logout(){
    //     cy.get('.oxd-userdropdown-tab .oxd-userdropdown-icon').click()
    //     cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    //     cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    // }
    logout(){
        cy.get('.oxd-userdropdown-tab .oxd-userdropdown-icon').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
}
export default Logout_page