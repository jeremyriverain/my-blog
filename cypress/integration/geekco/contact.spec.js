describe('contact form', () => {
  beforeEach(() => {
    cy.visit('/contact')
    cy.get('input#firstName').type('Johnny')
    cy.get('input#lastName').type('Appleseed')
    cy.get('input#email').type('johnny@appleseed.com')
    cy.get('input#phoneNumber').type('0000')
    cy.get('textarea#message').type('Hello world')
  })

  it('contact', () => {
    cy.percySnapshot()
  })

  it('has netlify form attributes', () => {
    cy.get('form')
      .invoke('attr', 'data-netlify')
      .should('eq', 'true')
    cy.get('form')
      .invoke('attr', 'data-netlify-honeypot')
      .should('eq', 'bot-field')
  })

  it('displays form validation', () => {
    cy.get('input#firstName').clear()
    cy.get('input#lastName').clear()
    cy.get('input#email')
      .clear()
      .type('wrong')

    cy.get('input#phoneNumber').clear()
    cy.get('textarea#message').clear()
    cy.get('form').submit()
    cy.get('[data-cy=firstName-input').should(
      'contain.text',
      'This field is required'
    )
    cy.get('[data-cy=lastName-input').should(
      'contain.text',
      'This field is required'
    )

    cy.get('[data-cy=email-input').should(
      'contain.text',
      'This email is invalid'
    )

    cy.get('[data-cy=phoneNumber-input').should(
      'contain.text',
      'This field is required'
    )

    cy.get('[data-cy=message-input').should(
      'contain.text',
      'This field is required'
    )
  })

  it('can submit a valid form', () => {
    cy.get('form').submit()
    cy.get('[data-cy=form-message').should('contain.text', 'Thank you')
  })
})
