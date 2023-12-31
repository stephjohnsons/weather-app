// https://on.cypress.io/api

describe('Launching the App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('h1', 'Weather App');
  });

  it('should display the search input', () => {
    cy.get('input[type="text"]').should('be.visible');
  });

  it('loading component mounts', () => {
    cy.contains('p', '👆🏻 Search a city and press enter to see the latest weather updates');
  })

  it('allows user to enter a city name and fetch weather data', () => {
    cy.get('input[type="text"]')
      .type('London')
      .should('have.value', 'London');

    cy.get('input[type="text"]').type('{enter}');

    cy.wait(500); 

    cy.contains('h1', 'London');
    cy.get('#temperature')
      .invoke('text')
      .then((text) => {
        const temperature = parseInt(text, 10);
        expect(Number.isInteger(temperature)).to.be.true;
      })

    cy.get('#country')
      .contains('span', 'United Kingdom');

    cy.get('#timezone')
      .contains('span', 'Europe/London');
  });
})
