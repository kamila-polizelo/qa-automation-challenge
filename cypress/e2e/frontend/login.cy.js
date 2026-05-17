import { LoginPage } from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Frontend", () => {
  beforeEach(() => {
    cy.createUser();
  });

  it(
    "Should login successfully",
    {
      tags: ["@smoke", "@frontend"],
    },
    function () {
      cy.login(this.createdUser.email, this.createdUser.password);

      cy.url().should("include", "/home");
    },
  );
});
