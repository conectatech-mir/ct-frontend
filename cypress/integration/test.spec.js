import user from '../fixtures/user'
describe('Conectatech App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Abriendo Front-app', () => {
        cy.contains('Conectatech')
    })
    it('login form can be opened', () => {
        cy.get('[data-cy=email-address]').type(user.email)
        cy.get('[data-cy=password]').type(user.password)
        //  cy.get('#password').type('mariana123')
        cy.get('[data-cy=checkbox-terminos]').click()
        //  cy.get('[data-cy=submit]').click()
        // 
    })
});