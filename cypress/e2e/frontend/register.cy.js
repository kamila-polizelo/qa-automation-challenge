import registerPage from "../../pages/registerPage";
import { faker } from "@faker-js/faker";

describe("Register Frontend", () => {
  it("Should register user successfully", () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste123",
    };

    registerPage.accessRegisterPage();

    registerPage.fillName(user.name);

    registerPage.fillEmail(user.email);

    registerPage.fillPassword(user.password);

    registerPage.clickRegister();

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
  });
});
