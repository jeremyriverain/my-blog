/// <reference types="cypress" />

context('portfolio', () => {
  beforeEach(() => {
    cy.visit('projects')
  })

  it('title includes Portfolio - Jérémy Riverain', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Portfolio - Jérémy Riverain')
  })

  it('the main header is visible and appropriate', () => {
    cy.get('h1')
      .should('have.length', 1)
      .should('contain', 'portfolio')
  })

  it('displays portfolio', () => {
    cy.get('[data-cy=portfolio]')
      .should('contain.text', 'Klubin')
      .should('contain.text', 'JetAndCo')
  })

  it('filters projects', () => {
    cy.get('[data-cy=filter-tag]')
      .contains('Quasar')
      .click()

    cy.get('[data-cy=portfolio-item]')
      .contains('Hÿapp')
      .should('have.length', 0)

    cy.get('[data-cy=portfolio-item]')
      .contains('Klubin')
      .should('be.visible')
  })
})
