describe('template spec', () => {
  it('passes', () => {
    cy.visit('/weather-app/contact')
    cy.contains('h2', 'Contact')
  })
})