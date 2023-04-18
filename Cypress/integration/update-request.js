/// <reference types = "Cypress"/>

describe('post', () => {
    it('post with body', () => {
        cy.request({
            method: "PUT",
            url: 'https://reqres.in/api/users/2',
            body: {
                
                    "name": "morpheus",
                    "job": "zion resident"
                
            }
        }).then((response)=>{
            expect(response.status).to.eql(200)
        })
    });
});