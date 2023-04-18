///<reference types = "Cypress"/>

describe('itration', () => {
    it('log the products present in hair care', () => {

        cy.visit("https://automationteststore.com/");

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        //log into the products present in the hair care

        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{

            cy.log('index'+index+': '+$el.text())
        })

    });
    it.only('iterate and click on any product', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{
            if($list.text().includes('panteen Pro-V Conditioner'))
            {
                cy.wrap($list).click()
            }
        })
    });
});