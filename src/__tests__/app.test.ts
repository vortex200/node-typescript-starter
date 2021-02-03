import request, { Response } from "supertest";
import app from "../app";

describe("App works", () => {
  it("Should return status 200", async (done) => {
    await request(app)
      .get("/api/user")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.message).toBeDefined();
      });
    done();
  });
});
