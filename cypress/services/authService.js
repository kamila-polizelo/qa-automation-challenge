export class AuthService {
  static login(credentials, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/login`,
      body: credentials,
      failOnStatusCode,
    });
  }
}
