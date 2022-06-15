describe('testing English and Morse translation', ()=> {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it('should be able to type input', ()=> {
        cy.get('[name="input"]').parent().click()
          .type('test');
        cy.get('[name="input"]')
          .should('have.text', 'test'); 
    })
})