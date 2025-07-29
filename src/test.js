const greet = require('./app');

const expected = "Hello, Test";
const output = greet("Test");

if (output === expected) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log(`Test Failed! Expected "${expected}" but got "${output}"`);
  process.exit(1);
}
