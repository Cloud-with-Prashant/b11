const core = require('@actions/core');

try {
  const num1 = parseFloat(core.getInput('num1'));
  const num2 = parseFloat(core.getInput('num2'));
  const sum = num1 + num2;
  console.log(`🧮 Sum of ${num1} and ${num2} is ${sum}`);
} catch (error) {
  core.setFailed(error.message);
}
