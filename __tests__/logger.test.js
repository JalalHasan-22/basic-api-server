"use strict";

const logger = require("../src/middleware/loggers");

describe("testing the logger middleware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("tests the console.log", () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("tests the next function call", () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
