import testhome_page from "../support/pageObject/automationTeststore.js/home_page";
import addOther from "../support/pageObject/automationTeststore.js/men";
import login from "../support/pageObject/automationTeststore.js/log";

///<reference types="Cypress"/>

describe('ef', () => {

    const home_page=new testhome_page()
    const men=new addOther()
    const log=new login()
    
    it('..', () => {
    home_page.visitPage()
    log.login()
    //cy.SelectName('Continue')
    log.registerDetails()
    //    men.menScent()
    //    men.addToCart()
    //    men.addAnother('Euphoria Men Intense Eau De Toilette Spray')
    //    men.menScent()
    //    men.addAnother('Armani Code after shave balm')
      // men.addToCart('Spray for Him')
    //    cy.go('back')
    //    cy.go('back')
    });
});