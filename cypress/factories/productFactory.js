import { faker } from '@faker-js/faker';

export class ProductFactory {
  static createProduct() {
    return {
      name: faker.commerce.productName(),
      price: '500',
      description: faker.commerce.productDescription(),
      quantity: '10',
    };
  }
}
