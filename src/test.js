const greet = require('./src/app');

const expected = "Hello, Test";
const output = greet("Test");

if (output === expected) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}
