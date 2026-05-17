import { LoginPage } from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Frontend", () => {
  beforeEach(() => {
    cy.createUser();
  });

  it("Should login successfully", function () {
    cy.login(this.createdUser.email, this.createdUser.password);

    cy.url({ timeout: 10000 }).should("include", "/home");

    cy.contains("Home").should("be.visible");
  });
});
