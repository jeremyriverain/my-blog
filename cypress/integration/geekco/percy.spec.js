/// <reference types="cypress" />

context('percy', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('take snapshots', () => {
    cy.makePercySnapshot('homepage')

    cy.get('[data-cy=menu-burger]').click()
    cy.get('[data-cy=menu] a')
      .contains('Portfolio')
      .click()
    cy.makePercySnapshot('portfolio')

    cy.get('[data-cy=portfolio-item]')
      .contains('Klubin')
      .click()
    cy.makePercySnapshot('portfolio item')

    cy.get('[data-cy=menu-burger]').click()
    cy.get('[data-cy=menu] a')
      .contains('Contact')
      .click()
    cy.makePercySnapshot('contact')

    cy.get('[data-cy=menu-burger]').click()
    cy.get('[data-cy=menu] a')
      .contains('Blog')
      .click()
    cy.makePercySnapshot('blog')

    cy.get('[data-cy=post-item-link]')
      .last()
      .click()
    cy.makePercySnapshot('post item')
  })
})
