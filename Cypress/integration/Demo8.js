///<reference types = "Cypress"/>

describe("drag and drop", () => {
  it.only("", () => {
    // cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
    // cy.get('.ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle >.ui-widget-header').should('contains','High Tatras').trigger('mousedown')
    //cy.get('//*[@id=""]').trigger('mousemove').trigger('mouseup')
    //cy.get('.')

    cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
    //cy.xpath('//button[contains(text(),"Double")]').dblclick()
    cy.get('.context-menu-one').rightclick()
    cy.get('.context-menu-icon-delete').click()
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.get(
    //   ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    // ).type("Admin");
    // cy.get(
    //   ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    // ).type("admin123");
    // cy.get(".oxd-button").click();
    // cy.contains("My Info").click();
    // cy.get(".orangehrm-action-header .oxd-text").scrollIntoView();
    // cy.get(".orangehrm-action-header .oxd-button").click();
    // cy.contains("Browse").click();
    //cy.get('.oxd-file-button').selectFile('')
  });
  it("", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca{enter}");
    cy.get(".products .product-name").should("have.length", 4);

    cy.get(".product").as("caitems");
    //i want to check on of the products contains add to cart

    cy.get("@caitems").eq(2).contains("ADD TO CART").click();
    cy.get("@caitems").each(($el, index, $list) => {
      //cy.log($el.find('h4.product-name').text())
      const textValue = $el.find("h4.product-name").text();
      if (textValue.includes("Cashews")) {
        cy.wrap($el).find("button").click();
      }
    });
    //title check
    cy.title().should("include", "GreenKart - veg and fruits kart");

    cy.get(".brand").then((headtitle) => {
      cy.log(headtitle.text());
    });
    //
    //cy.log(title)
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.contains("Proceed").click();
  });

  it("upload file", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('input[name="file"]').selectFile("/home/nineleaps/Pictures/Screenshot from 2023-02-22 14-22-32.png");
    cy.get('#file-submit').click()
  });
});
