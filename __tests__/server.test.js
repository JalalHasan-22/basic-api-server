"use strict";

const { app } = require("../src/server");
const supertest = require("supertest");
const req = require("express/lib/request");
const request = supertest(app);
let id;

describe("testing the API server", () => {
  it("testing the home route", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("Welcome to Home Page");
  });

  it("testing 404 on bad route", async () => {
    const response = await request.get("/asd");
    expect(response.status).toEqual(404);
  });

  it("testing 404 on bad method", async () => {
    const response = await request.patch("/food");
    expect(response.status).toEqual(404);
  });
});

// Testing Clothes
describe("testing the clothes model", () => {
  it("testing getting all the clothes data", async () => {
    const response = await request.get("/clothes");
    expect(response.status).toEqual(200);
  });

  it("testing adding an entry to clothes database", async () => {
    const response = await request
      .post("/clothes")
      .send({ name: "test", size: "test" });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("getting a single entry from the database", async () => {
    const response = await request.get(`/clothes/${id}`);
    expect(response.status).toEqual(200);
  });

  it("testing updating a row in the clothes database", async () => {
    const response = await request
      .put(`/clothes/${id}`)
      .send({ name: "test1", size: "large" });
    expect(response.status).toEqual(201);
  });

  it("testing delete an element by id", async () => {
    const response = await request.delete(`/clothes/${id}`);
    expect(response.status).toEqual(204);
  });
});

describe("testing the Food model", () => {
  it("getting all the entries from the database", async () => {
    const response = await request.get("/food");
    expect(response.status).toEqual(200);
  });

  it("adding an element to the food table", async () => {
    const response = await request
      .post("/food")
      .send({ foodName: "test", catagory: "snack" });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("udpate an entry", async () => {
    const response = await request.put(`/food/${id}`).send({
      foodName: "testing",
      catagory: "test test",
    });
    expect(response.status).toEqual(201);
  });

  it("deleting an element by ID", async () => {
    const response = await request.delete(`/food/${id}`);
    expect(response.status).toEqual(204);
  });
});
