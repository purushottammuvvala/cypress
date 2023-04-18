import visit from "../support/pageObject/peniche.js/visit";


///<reference types = "Cypress"/>

describe('peniche', () => {
    const visit1 = new visit()
    it('visit', () => {
        visit1.home()
    });
});