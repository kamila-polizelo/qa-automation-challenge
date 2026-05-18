export class UserService {
  static createUser(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: user,
    });
  }

  static deleteUser(userId) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
      failOnStatusCode: false,
    });
  }
}
