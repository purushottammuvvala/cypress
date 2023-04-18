import Home_page from "../support/pageObject/orangeHRM/Home_Page";
import Link_PO from "../support/pageObject/orangeHRM/Link_PO";
import Logout_page from "../support/pageObject/orangeHRM/Logout_Page";


///<reference types = "Cypress"/>


describe('This is my first Test Suite', () => {
    const home_page=new Home_page()
    const logout_page=new Logout_page()
    const link=new Link_PO()
    beforeEach(() => {
        home_page.visitHomePage()
        home_page.login()
    });
    it('This is my first Test Case', () => {
        cy.SelectName('Admin')
       //link.link_click('Admin')
       logout_page.logout()
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"][placeholder="Username"]').type('Admin')
        // cy.get('input[name="password"][placeholder="Password"]').type('admin123')
        // cy.get('.oxd-button').click()
        // cy.get('.oxd-userdropdown-tab .oxd-userdropdown-icon').click()
        // cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        })
});