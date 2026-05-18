import { UserService } from '../../services/userService';
import { UserFactory } from '../../factories/userFactory';

describe('Create User API', () => {
  let userId;

  after(() => {
    if (userId) {
      UserService.deleteUser(userId);
    }
  });

  it(
    'Should create user successfully',
    {
      tags: ['@smoke', '@api'],
    },
    () => {
      const user = UserFactory.createUser();

      UserService.createUser(user).then((response) => {
        userId = response.body._id;

        expect(response.status).to.eq(201);

        expect(response.body.message).to.eq('Cadastro realizado com sucesso');

        expect(response.body).to.have.property('_id');
      });
    }
  );
});
