import { RegisterPage } from "../../pages/registerPage";
import { UserFactory } from "../../factories/userFactory";

const registerPage = new RegisterPage();

describe("Register Frontend", () => {
  it(
    "Should register user successfully",
    {
      tags: ["@regression", "@frontend"],
    },
    () => {
      const user = UserFactory.createUser();

      registerPage.accessRegisterPage();

      registerPage.fillName(user.nome);

      registerPage.fillEmail(user.email);

      registerPage.fillPassword(user.password);

      registerPage.clickRegister();

      cy.url().should("include", "/home");
    },
  );
});
