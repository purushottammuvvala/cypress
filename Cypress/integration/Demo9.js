///<reference types = "Cypress"/>

describe('drag and drop', () => {
    it('drag and drop', () => {
        cy.visit('https://simple-drag-drop.glitch.me/')
        cy.contains('A').trigger('mousedown')
        cy.contains('B').trigger('mousemove').trigger('mouseup')
    });
});