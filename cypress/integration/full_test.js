describe('My First Test', () => {
    it('Type login information', () => {
      cy.visit('/');
      cy.get('#submitbtn').click();
      cy.wait(500);
      cy.get('#nameInput').type('范綱彥');
      cy.wait(500);
      cy.get('#stuidInput').type('408530003');
      cy.wait(500);
      cy.get('#depGradeInput').type('資管二');
    });
    it('Click start button to go to next page', () => {
      cy.wait(1000);
      cy.get('#submitbtn').click();
    });
    it('Admin finish the test in 30sec then cy click on submit button', () => {
      cy.wait(3000);
      cy.get('#O').click({ force: true });
      cy.wait(30000);
      cy.get('#submitbtn').click();
    });
  })
  