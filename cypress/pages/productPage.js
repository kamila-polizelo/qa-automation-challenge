export class ProductPage {
  accessProductPage() {
    cy.visit('/admin/cadastrarprodutos');
  }

  fillProductName(name) {
    cy.get('[data-testid="nome"]').type(name);
  }

  fillPrice(price) {
    cy.get('[data-testid="preco"]').type(price);
  }

  fillDescription(description) {
    cy.get('[data-testid="descricao"]').type(description);
  }

  fillQuantity(quantity) {
    cy.get('[data-testid="quantity"]').type(quantity);
  }

  clickRegisterProduct() {
    cy.get('[data-testid="cadastarProdutos"]').click();
  }
}
