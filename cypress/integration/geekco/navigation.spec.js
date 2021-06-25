/// <reference types="cypress" />

context('navigation', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get('[data-cy=menu-burger]').click()
  })

  it('hides navigation menu', () => {
    cy.get('[data-cy=menu]').should('be.visible')
    cy.get('[data-cy=menu-burger]').click()
    cy.get('[data-cy=menu]').should('not.be.visible')
  })

  it('goes to the portfolio page', () => {
    cy.get('[data-cy=menu] a')
      .contains('Portfolio')
      .click()
      .url()
      .should('eq', Cypress.config('baseUrl') + 'projects')
  })

  it('goes to the contact page', () => {
    cy.get('[data-cy=menu] a')
      .contains('Contact')
      .click()
      .url()
      .should('eq', Cypress.config('baseUrl') + 'contact')
  })

  it('goes to the blog page', () => {
    cy.get('[data-cy=menu] a')
      .contains('Blog')
      .click()
      .url()
      .should('eq', Cypress.config('baseUrl') + 'posts')
  })
})
