import { faker } from '@faker-js/faker'

Cypress.Commands.add('createUser', () => {

    const user = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: 'teste123',
        administrador: 'true'
    }

    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user

    }).then((response) => {

        expect(response.status).to.eq(201)

        cy.wrap(user).as('createdUser')

    })

})