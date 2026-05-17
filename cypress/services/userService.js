export class UserService {

    static createUser(user) {

        return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: user
        })

    }

    static login(credentials) {

        return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: credentials
        })

    }

    static getProducts() {

    return cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        failOnStatusCode: false
    })

}
}