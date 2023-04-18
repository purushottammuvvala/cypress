/// <reference types="Cypress"/>

describe('restful_booker', () => {
    var token
    var bid
    it('post_auth', () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            body: {
                
                    "username" : "admin",
                    "password" : "password123"
                
            }
        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            token=body.token
            cy.log(token)
        })
    });
    it('post', () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/booking",
            body: {
                
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                
            }
        }).then((response)=>{
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            bid=body.bookingid
            cy.log(bid)
        })
    });
    it.skip('get_IDS', () => {
        cy.request({
            method: "GET",
            url: "https://restful-booker.herokuapp.com/booking"
        }).then((response)=>{
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    });
    it('get', () => {
        cy.request({
            method: "GET",
            url: 'https://restful-booker.herokuapp.com/booking/'+bid+''
        }).then((response)=>{
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    });
    it('put', () => {
        cy.request({
            method: "PUT",
            url: "https://restful-booker.herokuapp.com/booking/"+bid+"",
            body: {
                
                    "firstname" : "James",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2023-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                
                
            },
        headers:{
            "failOnStatusCode": false,
            "Authorization" :"Basic YWRtaW46cGFzc3dvcmQxMjM="
 
        }
   }).then((response)=>{
    let body=JSON.parse(JSON.stringify(response.body))
    cy.log(body)
   })
 })

 it('delete', () => {
    cy.request({
        method: "DELETE",
        url: "https://restful-booker.herokuapp.com/booking/1",
        headers : {
            "Authorization" :"Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    }).then((response)=>{
        let body=JSON.parse(JSON.stringify(response.body))
        cy.log(body)
       })
 });

 it('ping', () => {
    cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/ping"
    }).then((response)=>{
        let body=JSON.parse(JSON.stringify(response.body))
        cy.log(body)
    })
 });

})
