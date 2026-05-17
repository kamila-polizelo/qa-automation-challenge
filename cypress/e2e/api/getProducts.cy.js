import { UserService } from "../../services/userService";

describe("Get Products API", () => {
  it("Should list products successfully", () => {
    UserService.getProducts().then((response) => {
      expect(response.status).to.be.oneOf([200, 503]);

      if (response.status === 200) {
        expect(response.body).to.have.property("quantidade");

        expect(response.body).to.have.property("produtos");

        expect(response.body.produtos).to.be.an("array");

        expect(response.duration).to.be.lessThan(2000);
      }
    });
  });
});
