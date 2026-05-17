export class LoginPage {
  accessLoginPage() {
    cy.visit("/login");
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid="senha"]').type(password);
  }

  clickLogin() {
    cy.get('[data-testid="entrar"]').click();
  }
}
