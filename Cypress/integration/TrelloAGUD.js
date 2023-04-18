/// <reference types = "Cypress"/>

describe('Trello', () => {
    var key="e90c31c9b616957a94208a604542b97d"
    var token="ATTAaa13455edbb83d2374c149c3c9a8eac000769b7262e7ae3c212176d44c41578491A4ABAF"
    var vid
    var name="ranjith123"
    it('Add', () => {
        
        cy.request({
            method: "POST",
            url: 'https://api.trello.com/1/boards/?name=ranjith&key='+key+'&token='+token+'',
           
        }).then((response)=>{
            
            let body = JSON.parse(JSON.stringify(response.body))
            vid=body.id
            cy.log(body.id)
            
        })
    });
    it('Get', () => {
        cy.request({
            method: "GET",
            url: 'https://api.trello.com/1/boards/'+vid+'?key='+key+'&token='+token+'',
        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    });
    it('Put', () => {
        cy.request({
            method: "PUT",
            url: 'https://api.trello.com/1/boards/'+vid+'?key='+key+'&token='+token+'&name='+name+'',
        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
        
    });
    it.skip('Delete',() => {
        cy.request({
            method: "DELETE",
            url: 'https://api.trello.com/1/boards/'+vid+'?key='+key+'&token='+token+'',
        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    })
});