const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;


test('should add 2 numbers', () => {
  const result = add(3, 4);

  // https://jestjs.io/docs/en/expect
  expect(result).toBe(7);
  // if(result !== 7) {
  //   throw new Error(`You added 4 and 3 the result was ${result}, expected 7`);
  // }
});


test('shoud return Hello Bob', () => {
  const result = generateGreeting('Bob');

  expect(result).toBe('Hello Bob');
});

