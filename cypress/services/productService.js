export class ProductService {

    static getProducts() {

        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/produtos`
        })

    }

}