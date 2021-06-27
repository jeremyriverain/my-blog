/// <reference types="cypress" />

context('blog', () => {
  beforeEach(() => {
    cy.visit('posts')
  })

  it('title includes Blog - Jérémy Riverain', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Blog | Geekco')
  })

  it('the main header is visible and appropriate', () => {
    cy.get('h1')
      .should('have.length', 1)
      .should('contain', 'Blog')
  })

  it('displays posts', () => {
    cy.get('[data-cy=post-item]').should('have.length.above', 1)
  })
})