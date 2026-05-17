import { ProductPage } from '../../pages/productPage';
import { ProductFactory } from '../../factories/productFactory';

const productPage = new ProductPage();

describe('Product Frontend', () => {
  beforeEach(() => {
    cy.createUser();
  });

  it(
    'Should register product successfully',
    {
      tags: ['@regression', '@frontend'],
    },
    function () {
      const product = ProductFactory.createProduct();

      cy.login(this.createdUser.email, this.createdUser.password);

      cy.url().should('include', '/home');

      productPage.accessProductPage();

      productPage.fillProductName(product.name);

      productPage.fillPrice(product.price);

      productPage.fillDescription(product.description);

      productPage.fillQuantity(product.quantity);

      productPage.clickRegisterProduct();

      cy.url().should('include', '/admin/listarprodutos');

      cy.contains(product.name).should('be.visible');
    }
  );
});
