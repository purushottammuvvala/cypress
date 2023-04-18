/// <reference types = "Cypress"/>
describe('Add and delete google map', () => {
    var id;
    it('add google map', () => {
        cy.request({
            method: "POST",
            url: "http://216.10.245.166/maps/api/place/add/json?key= qaclick123",
            body: {
                "location":{


                    "lat" : -38.383494,
            
            
                    "lng" : 33.427362
            
            
                },
            
            
                "accuracy":50,
            
            
                "name":"Frontline house",
            
            
                "phone_number":"(+91) 983 893 3937",
            
            
                "address" : "29, side layout, cohen 09",
            
            
                "types": ["shoe park","shop"],
            
            
                "website" : "http://google.com",
            
            
                "language" : "French-IN"
            
            
            
            }
        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log()
            id=body.place_id

        })
    });
    it('delete the google map', () => {
        cy.request({
            method: "DELETE",
            url: "http://216.10.245.166/maps/api/place/delete/json?key= qaclick123",
            body: {
                "place_id":id
            }

        }).then((response)=>{
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    });
});