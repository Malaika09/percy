/// <reference types="Cypress" />
import '@percy/cypress'

describe("",()=>{
    before(()=>{
        cy.visit('/')
    })
    it("percy", ()=>{
        cy.percySnapshot('Desktop - Home', { widths: [1280, 1366, 1920] });
    })
})