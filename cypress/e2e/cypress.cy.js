describe('test the practice login',()=>{
beforeEach(()=>{
   cy.visit('https://practicetestautomation.com/practice-test-login/')
})
it('perform login with valid credentials',()=>{
    cy.get('#username').eq(0).type('student');
    cy.get('#password').eq(0).type('Password123');
    cy.get('button#submit').should('be.visible').click()
    cy.url().should('include','https://practicetestautomation.com/logged-in-successfully/')
    cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')
    cy.get('.wp-block-button__link').should('be.visible')
})
it('perform login with invalid credentials negative scenario 1',()=>{
    cy.get('#username').eq(0).type('incorrectUser');
    cy.get('#password').eq(0).type('Password123'); 
    cy.get('button#submit').should('be.visible').click()
    cy.get('#error').should('be.visible');
    cy.get('#error').should('have.text','Your username is invalid!')
})
it('perform login with invalid credentials negative scenario 2',()=>{
    cy.get('#username').eq(0).type('student');
    cy.get('#password').eq(0).type('incorrectPassword'); 
    cy.get('button#submit').should('be.visible').click()
    cy.get('#error').should('be.visible');
    cy.get('#error').should('have.text','Your password is invalid!')
})
})





