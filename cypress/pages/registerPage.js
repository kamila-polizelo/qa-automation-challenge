export class RegisterPage {
  accessRegisterPage() {
    cy.visit("/cadastrarusuarios");
  }

  fillName(name) {
    cy.get('[data-testid="nome"]').type(name);
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid="password"]').type(password);
  }

  clickRegister() {
    cy.get('[data-testid="cadastrar"]').click();
  }
}
