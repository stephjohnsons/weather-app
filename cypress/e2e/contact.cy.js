describe('template spec', () => {
  it('passes', () => {
    cy.visit('/contact')
    cy.contains('h2', 'Contact')
  })
})