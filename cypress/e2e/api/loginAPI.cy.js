import { faker } from "@faker-js/faker";
import { UserService } from "../../services/userService";

describe("Login API", () => {
  it("Should login successfully", () => {
    const user = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste123",
      administrador: "true",
    };

    UserService.createUser(user).then(() => {
      const credentials = {
        email: user.email,
        password: user.password,
      };

      UserService.login(credentials).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body.message).to.eq("Login realizado com sucesso");

        expect(response.body).to.have.property("authorization");
      });
    });
  });
});
