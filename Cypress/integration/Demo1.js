///<reference types="Cypress"/>

describe("this is my test suite", () => {
  it("this is my first test case", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();

    //this will verify  the login name using framework
    // cy.get(".oxd-userdropdown-name").should(
    //   "have.text",
    //   "ankita22cevtl6 46QPa"
    // );

    //while using two classes there must be space between parent and sub class
    cy.get(".oxd-userdropdown > .oxd-userdropdown-tab").click();
    //this concept in javascript is called chaining
    cy.get(".oxd-dropdown-menu")
      .find(".oxd-userdropdown-link")
      .should("have.length", 4);

    //promise

    cy.get(".oxd-dropdown-menu")
    .find(".oxd-userdropdown-link").eq(3).contains("Logout").then((lastlink)=>{
        const lastlinkname = lastlink.text();
        cy.log(lastlinkname);
        cy.wrap(lastlink).click();
    })
  });
});
