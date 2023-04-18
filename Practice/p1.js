/// <reference types = "Cypress"/>

describe('saucedemo.com/', () => {

  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/index.html')
  });
    it.skip('test saucedemo.com/', () => {
      
      cy.get('#contact-us > .thumbnail > .section-title > h1').click()
     
    });
    it.skip('contact', () => {
      cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('[name="first_name"]').type("ranjith")
      cy.get('[name="last_name"]').type("r")
      cy.get('[name="email"]').type("ranjith@gmail.com")
      cy.get('[name="message"]').type("rrr")
      cy.get('[type="submit"]').click()
      cy.get('h1').should("have.text","Thank You for your Message!")
    });
    it.skip('login-portal', () => {
      cy.get('#login-portal > .thumbnail > .section-title > h1').click()
      //cy.get('#login-portal > .thumbnail > .section-title > h1')
    });
    it.skip('', () => {
      cy.visit('http://webdriveruniversity.com/Login-Portal/index.html')
       cy.get('#text').type("ranjith")
       cy.get('#password').type("ranjith")
       cy.get('#login-button').click()
    });
    it.skip('to-do-list', () => {
      cy.get('#to-do-list > .thumbnail > .section-title > h1').click()
    });
    it.skip('', () => {
        cy.visit('http://webdriveruniversity.com/To-Do-List/index.html')
        cy.get("#plus-icon").click()
        cy.get('[placeholder="Add new todo"]').click({force: true})
        cy.get('ul > :nth-child(1)').click()
    });
    it.skip('to-do-list', () => {
      cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail > .section-title > h1').click()
    });
    it.skip('', () => {

      //dropdown
      cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
      cy.get('#dropdowm-menu-1').select("python").should("have.value","python")
      cy.get('#dropdowm-menu-2').select("maven").should("have.value","maven")
      cy.get('#dropdowm-menu-3').select("javascript").should("have.value","javascript")

      //checkbox
      cy.get('[value="option-2"]').click()
      cy.get('[value="option-3"]').click()
      cy.get('[value="option-4"]').click()

      //radiobutton
      cy.get('[value="green"]').click()

      //radio dynamic
      cy.get('[value="lettuce"]').click()
      cy.get('#fruit-selects').select('apple').should('have.value','apple')
    });

    it.skip('actions', () => {
      cy.get('#actions > .thumbnail > .section-title > h1').click()
    });
    it.skip('', () => {
       cy.visit('http://webdriveruniversity.com/Actions/index.html')
      // cy.get('#draggable').trigger('mouseover')
      // cy.get('DRAG ME TO MY TARGET!').trigger('mousedown').trigger('mousemove')
      // cy.contains('DROP HERE!').trigger('mouseup')

        cy.get('h2').dblclick()

        cy.wait(6000)
        cy.xpath('//button[contains(text(),"Hover Over Me First!")]').trigger('mouseover')

        cy.wait(6000)
    });


    it.skip('scrolling-around', () => {
      cy.get('#scrolling-around > .thumbnail > .section-title > h1').click()
    });
    it.skip('', () => {
      cy.visit('http://webdriveruniversity.com/Scrolling/index.html')

      cy.get('#zone1').scrollIntoView().trigger('mouseover')
      
    });

    it.skip('autocomplete-textfield', () => {
      cy.get('#autocomplete-textfield > .thumbnail > .section-title > h1').click()
    });
    it.skip('', () => {
      cy.visit('http://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
      cy.get('#myInput').type('app')
      cy.get('#myInputautocomplete-list').each(($el,index,$list)=>{
        if($el.text()=="Apple")
        {
          cy.wrap($el).click()
        }
      })
      cy.get('#submit-button').click()

    });


    it('myFile', () => {
      
      cy.get('#file-upload > .thumbnail > .section-title > h1').click()
    });
    it('', () => {
      cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
      cy.wait(6000)
      cy.get("#myFile").selectFile('/home/nineleaps/hello')
      cy.wait(6000)
      cy.get('#submit-button').click()
      cy.wait(6000)
    });
});