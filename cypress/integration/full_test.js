describe('My First Test', () => {
    it('Type login information', () => {
      cy.visit('http://localhost:8000');
      cy.get('#idInput').type('408530003');
      cy.wait(500);
      cy.get('#depGradeInput').type('資管二');
      cy.wait(500);
      cy.get('#nameInput').type('范綱彥');
    });
    it('Click start button to go to next page', () => {
      cy.wait(1000);
      cy.get('#submitbtn').click();
    });
    it('Click on each radio button to see toasts', () => {
      cy.wait(3000);
      cy.get('#A').click({ force: true });
      cy.wait(3000);
      cy.get('#B').click({ force: true });
      cy.wait(3000);
      cy.get('#C').click({ force: true });
      cy.wait(3000);
      cy.get('#D').click({ force: true });
    });
  })
  