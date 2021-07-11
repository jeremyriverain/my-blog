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
      .should('contain', 'Jérémy Riverain')
      .should('contain', 'developer')
  })

  it('displays jobs', () => {
    cy.get('[data-cy=experiences]')
      .should('contain.text', 'Zenika')
      .should('contain.text', 'Sentinelles du web')
      .should('contain.text', 'Freelance')
  })

  it('displays technologies', () => {
    cy.get('[data-cy=technologies]')
      .should('contain.text', 'Vue js')
      .should('contain.text', 'Symfony')
  })
})
