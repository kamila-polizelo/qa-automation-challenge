import { faker } from '@faker-js/faker';

export class UserFactory {
  static createUser() {
    return {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: 'teste123',
      administrador: 'true',
    };
  }
}
