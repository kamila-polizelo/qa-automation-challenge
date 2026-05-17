import loginPage from "../../pages/loginPage";

describe("Login Frontend", () => {
  beforeEach(() => {
    cy.createUser();
  });

  it("Should login successfully", function () {
    loginPage.accessLoginPage();

    loginPage.fillEmail(this.createdUser.email);

    loginPage.fillPassword(this.createdUser.password);

    loginPage.clickLogin();

    cy.url({ timeout: 10000 }).should("include", "/home");

    cy.contains("Home").should("be.visible");
  });
});
