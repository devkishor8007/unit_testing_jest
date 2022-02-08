const { multiply, helloName } = require("../sample");

// --- first way to do ---
test("added of 1,1 should be 2", () => {
  let a = 1;
  let b = 1;
  expect(a + b).toBe(2);
});

// --- second way to do ---
describe("Multiply", () => {
  test("multiply 5 by 6 is not to be 35", () => {
    let a = 5;
    let b = 6;
    expect(a * b).not.toBe(35);
  });
});

describe("matcher method", () => {
  test("testing the variable is undefined", () => {
    let number = undefined;
    expect(number).not.toBeDefined();
    expect(number).toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });

  test("testing the variable is null", () => {
    let number = null;
    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });

  test("testing the variable is 0", () => {
    let number = 0;
    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });
});

describe("work on numbers", () => {
  test("Number Comparison", () => {
    const a = 5;
    const b = 7;
    expect(a + b).toBeGreaterThan(11);
    expect(a + b).toBeGreaterThanOrEqual(6);
    expect(a + b).toBeLessThanOrEqual(17);
  });
});

describe("check data", () => {
  test("find p from the kishor", () => {
    let nameIs = "kishor";
    expect(nameIs).not.toMatch(/p/);
  });

  const fruits = ["apple", "banana", "orange"];
  test("the fruits should contain and shouldnot", () => {
    expect(fruits).not.toContain("papaya");
    expect(fruits).toContain("banana");
  });
});

describe("object", () => {
  const createObject = [
    {
      name: "Kishor",
      learn: "jest",
    },
    {
      name: "Arjun",
      learn: "nodejs",
    },
    {
      name: "Ram",
      learn: "express",
    },
    {
      name: "Harii",
      learn: "mongodb",
    },
  ];

  expect(createObject).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        learn: expect.any(String),
      }),
    ])
  );
});

describe("from the import", () => {
  test("can be multiply 5 , 6 is 30", () => {
    expect(multiply(5, 6)).toBe(30);
    expect(multiply(5, 6)).not.toBe(33);
  });

  test("name is matching", () => {
    expect(helloName()).toBe("kishor");
    expect(helloName()).not.toBe("ram");
  });
});
