import request from "supertest";
import Server from "../../src/index.ts";
import { Express } from "express";

let app: Express;
let server: any;


beforeAll(async () => {
  try {
    app = await Server();
    server = app.listen(1337);
  } catch (error) {
    console.log(error);
  }
});

afterAll(async () => {
  if (server) {
    console.log("Server does exist");
    server.close();
  }
});

describe("Blogging API tests", () => {
  test("GET /api/resource should return status 200", async () => {
    const response = await request(app).get("/check");
    expect(response.status).toBe(200);
  });

  // Add more test cases as needed
});
