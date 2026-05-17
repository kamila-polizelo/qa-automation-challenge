import { LoginPage } from "../pages/loginPage";
import { UserFactory } from "../factories/userFactory";
import { UserService } from "../services/userService";

const loginPage = new LoginPage();

Cypress.Commands.add("login", (email, password) => {
  loginPage.accessLoginPage();

  loginPage.fillEmail(email);

  loginPage.fillPassword(password);

  loginPage.clickLogin();
});

Cypress.Commands.add("createUser", () => {
  const user = UserFactory.createUser();

  UserService.createUser(user).then((response) => {
    expect(response.status).to.eq(201);

    cy.wrap(user).as("createdUser");
  });
});
