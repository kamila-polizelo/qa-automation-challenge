import { faker } from '@faker-js/faker'
import { UserService } from '../../services/userService'

describe('Create User API', () => {

    it('Should create user successfully', () => {

        const user = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: 'teste123',
            administrador: 'true'
        }

        UserService.createUser(user)
            .then((response) => {

                expect(response.status).to.eq(201)

                expect(response.body.message)
                    .to.eq('Cadastro realizado com sucesso')

                expect(response.body)
                    .to.have.property('_id')

            })

    })

})

