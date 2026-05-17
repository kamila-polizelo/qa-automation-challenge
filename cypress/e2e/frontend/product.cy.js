import loginPage from "../../pages/loginPage";
import productPage from "../../pages/productPage";
import { faker } from "@faker-js/faker";

describe("Product Frontend", () => {
  beforeEach(() => {
    cy.createUser();
  });

  it("Should register product successfully", function () {
    const product = {
      name: faker.commerce.productName(),
      price: "500",
      description: faker.commerce.productDescription(),
      quantity: "10",
    };

    loginPage.accessLoginPage();

    loginPage.fillEmail(this.createdUser.email);

    loginPage.fillPassword(this.createdUser.password);

    loginPage.clickLogin();

    cy.url().should("include", "/home");

    productPage.accessProductPage();

    productPage.fillProductName(product.name);

    productPage.fillPrice(product.price);

    productPage.fillDescription(product.description);

    productPage.fillQuantity(product.quantity);

    productPage.clickRegisterProduct();

    cy.url().should("include", "/admin/listarprodutos");

    cy.contains(product.name).should("be.visible");
  });
});
