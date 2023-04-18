/// <reference types = "Cypress"/>

describe('Post', () => {
    it('post method with body', () => {
        cy.request({
            method: "POST",
            url:"https://reqres.in/api/users/2",
            body: {
                "name": "ranjith",
                "job": "air"
            },
            header: {
                accept: 'application/js'
            }
        }).then((response)=>{
            expect(response.status).to.eql(201)
        })
        
    });
});