import user from '../fixtures/user'
describe('/login Conectatech App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
    it('Abriendo Front-app', () => {
        cy.contains('h1', 'ConectaTech')
    });
    it('login form can be opened', () => {
        cy.get('div').contains('Sign in to access your account').click()
        cy.get('[data-cy=email-address]').type(user[0].email)
        cy.get('[data-cy=password]').type(user[0].password)
        //  cy.get('#password').type('mariana123')
        cy.get('[data-cy=checkbox-terminos]').click()
        cy.get('[data-cy=submit]').click()
        cy.contains('Proyectos Abiertos:')
        // 
    });
    it('login', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8000/api/auth/login',
            body: {
                email: 'jr.almeyda7@gmail.com',
                password: 'junior'
            }
        })
            .then((response) => {
                window.localStorage.setItem('jwt', response.body.token);
                expect(response.status).to.eq(200)
            })
    })
});