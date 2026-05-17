export class UserService {
  static createUser(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: user,
    });
  }

  static login(credentials) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/login`,
      body: credentials,
    });
  }
}
