export class UserService {

    static createUser(user) {

        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/usuarios`,
            body: user
        })

    }

}