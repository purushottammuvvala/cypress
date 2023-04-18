///<reference types = "Cypress"/>
///<reference types = "@cypress/xpath"/>
describe('all options in one place', () => {
    it('check box', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //checking all the boxes using the common reference of all 
        //cy.get('input[type="checkbox"]').check()

        //need to select any two of the check box

        cy.reload(true)
        cy.get('input[type="checkbox"]').check(['option1','option3'])
    });

    it('dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select(['Option1']).should('have.value','option1')
    });
    it('Dynamicdropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item').each(($el,index,$list)=>{
            
            if($el.text()=='India')
            {
                cy.wrap($el).click()
            }
        })

    });
    it('hideShow', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox').click().should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    });
    it('alertpopup', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //  adding assertion to alert and confirm

        cy.on('window:alert',(string)=>{
            expect(string).equal('Hello , share this practice page and share your knowledge')
        })
    });
    it('radioButton', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').eq(0).click()
    });
    // it('mouserHover', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     // cy.get('#mousehover').trigger('mousemove').trigger('mouseover')
    //     // cy.contains('Top').click({force:true})
        
    //    cy.contains('Top').click({force:true})
    // });

    it('openNewTab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
    });
    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('[href$="/windows/new"]').invoke('removeAttr','target').click()
    });
    it('Web table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            const data = $el.text()
            if(data.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((cost)=>{
                    cy.log(cost.text())
                })
            }
        })
        
    });
    it.only("headTaable", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(".tableFixHead").find("tr td:nth-child(1)").each(($el, index, $list) => {
            const dataName = $el.text();
            if (dataName.includes("Alex")) {
              cy.get(".tableFixHead").find("tr td:nth-child(1)").eq(index).next().then((data1) => {
                  cy.log(data);
                });
            }
          });
      });
});