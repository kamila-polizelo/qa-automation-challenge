import { UserService } from "../../services/userService";
import { AuthService } from "../../services/authService";
import { UserFactory } from "../../factories/userFactory";

describe("Login API", () => {
  it("Should login successfully", () => {
    const user = UserFactory.createUser();

    UserService.createUser(user).then(() => {
      const credentials = {
        email: user.email,
        password: user.password,
      };

      AuthService.login(credentials).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body.message).to.eq("Login realizado com sucesso");

        expect(response.body).to.have.property("authorization");
      });
    });
  });
});
