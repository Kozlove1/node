const { argv } = require('node:process');

const [, , a, b, operation] = argv;

const operations = {
  add: require('./add'),
  subtract: require('./subtract'),
  multiply: require('./multiply'),
  divide: require('./divide')
}

if (!operations[operation]) {
  console.error('Такой операции нет');
  return;
}

const calculate = (a, b, operation) => {
  switch (operation) {
    case 'add':
      return operations.add(a, b);
    case 'subtract':
      return operations.subtract(a, b);
    case 'multiply':
      return operations.multiply(a, b);
    case 'divide':
      return operations.divide(a, b);
  }
}

const result = calculate(a, b, operation);
console.log(`${a} ${operation} ${b} = ${result}`);