import { UserRepository } from "../src/repository/user-repository";
import { UserMemoryRepository } from "../src/repository/impl/user-memory-repository";
import { LoginServiceImpl } from "../src/services/impl/login-service-impl";
import { expect } from "chai";
import { UserValidation } from "../src/events/in-events";
import * as sinon from "ts-sinon";
import { User } from "../src/model/user";

describe("Login service test", () => {
  // the tests container

  const stubObject = sinon.stubObject;
  const stubRepository = stubObject<UserMemoryRepository>(
    new UserMemoryRepository()
  );

  beforeEach(() => {
    const mockUser: User = {
      name: "test",
      email: "test@test.com",
      password: "pass",
      roles: ["ROLE"],
      active: true,
    };

    stubRepository.login.returns(mockUser);
  });

  afterEach(() => {});

  it("Validate user exists", () => {
    // the single test

    const service = new LoginServiceImpl(stubRepository);
    const validationRequest: UserValidation = {
      username: "test",
      password: "pass",
    };
    const response = service.validateUser(validationRequest);
    expect(response.success).to.be.true;
    expect(response.data)
      .to.be.an("object")
      .to.have.property("email")
      .to.equal("test@test.com");
      expect(response.data)
      .to.be.an("object")
      .to.have.property("active")
      .to.equal(true);  
    console.log(JSON.stringify(response.data));
  });
});
