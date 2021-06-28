/// <reference types="cypress" />

context('blog', () => {
  beforeEach(() => {
    cy.visit('posts')
  })

  it('blog list', () => {
    cy.percySnapshot()
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

context('example blog post', () => {
  beforeEach(() => {
    cy.visit(
      'posts/en/how-to-use-gitlab-ci-and-php-stan-to-improve-code-quality-in-your-symfony-project'
    )
  })

  it('blog post', () => {
    cy.percySnapshot()
  })
})
