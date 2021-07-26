describe('My First Test', () => {
    it('Visits login page', () => {
      cy.visit('http://localhost:8000');
      cy.get('#submitbtn');
    })
  })
  