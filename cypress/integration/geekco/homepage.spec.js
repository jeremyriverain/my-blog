/// <reference types="cypress" />

context('homepage', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('title includes my name and my job', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Jérémy Riverain - Developer')
  })

  it('the main header is visible and appropriate', () => {
    cy.get('h1')
      .should('have.length', 1)
      .should('contain', "I'm Jérémy Riverain, a french developer")
  })
})
