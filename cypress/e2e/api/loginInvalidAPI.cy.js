import { AuthService } from "../../services/authService";

describe("Invalid Login API", () => {

  it("Should not login with invalid credentials", () => {

    const credentials = {
      email: "invalid@email.com",
      password: "wrongpassword"
    };

    AuthService.login(credentials, false).then((response) => {

      expect(response.status).to.eq(401);

      expect(response.body.message)
        .to.eq("Email e/ou senha inválidos");

    });

  });

});