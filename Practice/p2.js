import Home_page from "../support/pageObject/orangeHRM/Home_Page";
import Link_PO from "../support/pageObject/orangeHRM/Link_PO";
import Logout_page from "../support/pageObject/orangeHRM/Logout_Page";
///<reference types="Cypress" />

describe('', () => {
    const home_page=new Home_page()
    const link_Click=new Link_PO()
    const logout=new Logout_page()
    it('', () => {
        home_page.visitHome()
        home_page.login()
        link_Click.link_click("Admin")
        logout.logout()
    });
});