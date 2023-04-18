/// <reference types = "Cypress"/>

describe('Rest api testing with Cypress', () => {
    var result;
    it('Simple get request', () => {
        //
        result = cy.request('https://reqres.in/api/users/2')
        result.its("status").should('equal',200)
    });
    it.only('validate response of the request', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            headers: {
                accept: "application/json"
                //Authorization: "bearer tokenvalue"
            }
        }).then((response)=>{
             //to convert the response to json we use 
             // the variable body contains the entire response
             let body = JSON.parse(JSON.stringify(response.body))
             cy.log(body.data.email)
             expect(body.data).has.property('email','janet.weaver@reqres.in')
             cy.log(body.data['id','email'])
            //  body.data.forEach(element => {
            //     cy.log("id"+" "+Element[0]+"email"+" "+Element[1])
            //  });
            let b = body.data
            cy.log(b['id']+" "+b['email'])
        })
    });
});