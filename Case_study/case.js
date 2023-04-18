///<reference types="Cypress"/>


describe('case study tourism', () => {
    // before(() => {
    //     cy.fixture('example').then(function(data) {
    //         globalThis.data=data
    //     })
    // });
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/test/newtours/')
    });
    it('login', () => {
        //cy.visit('https://demo.guru99.com/test/newtours/')

        cy.fixture('example').then(function(user) {
             user.forEach(user => {
                
             
        cy.get('a[href$="register.php"]').eq(0).click()
        cy.get('input[name="firstName"]').type(user.firstname)
        cy.get('input[name="lastName"]').type(user.lastname)
        cy.get('input[name="phone"]').type(user.phone)
        cy.get('input[name="userName"]').type(user.email)
        cy.get('input[name="address1"]').type(user.adress)
        cy.get('input[name="city"]').type(user.city)
        cy.get('input[name="state"]').type(user.state)
        cy.get('input[name="postalCode"]').type(user.pcode)
        cy.get('select[name="country"]').select('INDIA')
        
        cy.get("#email").type(user.username)
        cy.get("input[name='password']").type(user.password)
        cy.get("input[name='confirmPassword']").type(user.password)
        cy.get("input[name='submit']").click()
        cy.get('a[href$="login.php"]').click()
        cy.get('input[name="userName"]').type(user.username)
        cy.get('input[name="password"]').type(user.password)
        cy.get("input[name='submit']").click()

    });     
    })
    });
     it('flights', () => {
          cy.get('[href$="reservation.php"]').click()
          cy.get('input[value="roundtrip"]').click()
          cy.get('select[name="passCount"]').select(2)
          cy.get('select[name="fromPort"]').select('London')
          cy.get('select[name="fromMonth"]').select('December')
          cy.get('select[name="fromDay"]').select('12')
          cy.get('select[name="toPort"]').select('Zurich')

          cy.get('select[name="toMonth"]').select('December')
          cy.get('select[name="toDay"]').select('27')
          cy.get('input[value="First"]').click()
          cy.get('select[name="airline"]').select('Blue Skies Airlines')
          cy.get('input[name="findFlights"]').click()
          cy.get('img[src="images/home.gif"]').click()
    });
    it('hotels', () => {
        cy.contains('Hotels').click()
        cy.url().should('include','support')
        cy.get('img[src="images/home.gif"]').click()
        cy.wait(5000)
    });
    it('cruises', () => {
        //cy.visit("https://demo.guru99.com/test/newtours/index.php")
        cy.get('a[href^="index"]').contains("Cruises").click();
        cy.get('input[name=userName]').type("santosh0103")
        cy.get("input[name=password]").type("santosh13")
        cy.get("input[name=submit]").click()
     })
     it.only('Vacations', () => {
         //cy.visit("https://demo.guru99.com/test/newtours/index.php")
         cy.get('a[href^="support"]').contains("Vacations").click();
         cy.url().should('not.include','Vacations')
         cy.log("site is under construction so go to home")
         cy.get('img[src="images/home.gif"]').click()
      })
    
});