const { argv } = require('node:process');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const [, , a, b, operation] = argv;

const operations = {
  add: require('./add'),
  subtract: require('./subtract'),
  multiply: require('./multiply'),
  divide: require('./divide')
}

if(!operations[operation]) {
  console.error('Такой операции нет');
  process.exit(1);
}

const addHandler = (num1, num2) => {
  const result = operations.add(num1, num2);
  console.log(`add ${num1} + ${num2} = ${result}`);
  eventEmitter.removeListener('add', addHandler);
};

const subtractHandler = (num1, num2) => {
  const result = operations.subtract(num1, num2);
  console.log(`subtract ${num1} - ${num2} = ${result}`);
  eventEmitter.removeListener('subtract', subtractHandler);
};

const multiplyHandler = (num1, num2) => {
  const result = operations.multiply(num1, num2);
  console.log(`multiply ${num1} * ${num2} = ${result}`);
  eventEmitter.removeListener('multiply', multiplyHandler);
};

const divideHandler = (num1, num2) => {
  const result = operations.divide(num1, num2);
  console.log(`divide ${num1} / ${num2} = ${result}`);
  eventEmitter.removeListener('divide', divideHandler);
};

eventEmitter.on('add', addHandler);
eventEmitter.on('subtract', subtractHandler);
eventEmitter.on('multiply', multiplyHandler);
eventEmitter.on('divide', divideHandler);

eventEmitter.emit(operation, parseFloat(a), parseFloat(b));
