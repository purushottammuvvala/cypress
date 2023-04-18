///<reference types="Cypress"/>

//reference is basically to fetch the methods

describe("This is my test Suite", () => {
  it("this is my test case", () => {
    cy.visit("https://automationteststore.com/");

    // //cy.xpath('//*[href$="Contact"]').click()

    cy.xpath('//a[contains(text(),"Contact")]').click();
    cy.xpath('//input[@id="ContactUsFrm_first_name"]').type("ranjith");
    cy.xpath('//input[@id="ContactUsFrm_email"]').type("ranjith@gmail.com");
    cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("find shampoo");

    cy.xpath('*//button[@type="submit" and @title="Submit"]').click();
    cy.xpath('//p[contains(text(),"successfully")]').should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
