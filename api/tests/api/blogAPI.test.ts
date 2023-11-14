import request from "supertest";
import Server from "../../src/index.ts";


let app : any;

beforeAll(async () => {
    app = await Server();
    app.listen(1337);
  });

afterAll(async () => {
    app.close()
})

describe("API Tests", () => {
  test("GET /api/resource should return status 200", async () => {
    const response = await request(app).get("/api/resource");
    expect(response.status).toBe(200);
  });

  test("POST /api/resource should create a new resource", async () => {
    const response = await request(app).post("/api/resource").send({
      data: "some data",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  // Add more test cases as needed
});
