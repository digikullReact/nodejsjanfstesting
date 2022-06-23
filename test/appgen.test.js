const {sum,loweCaseString,upperCaseString,testInArray} = require('../appgen');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('string ', () => {
    expect(loweCaseString("APPLE")).toBe("apple");
  });


  test('uppercase',()=>{
    expect(upperCaseString("apple")).toBe("APPLE");
  })


  test('array',()=>{
    expect(testInArray(["apple","bee","cat","dog"])).toContain("APPLE");
  })

