import { LoginPage } from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Invalid Login Frontend", () => {
  it("Should display error message with invalid credentials", () => {
    cy.visit("/login");

    loginPage.fillEmail("invalid@email.com");

    loginPage.fillPassword("wrongpassword");

    loginPage.clickLogin();

    cy.contains("Email e/ou senha inválidos").should("be.visible");
  });
});
